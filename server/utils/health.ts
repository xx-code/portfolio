import type { H3Event } from 'h3'

export type HealthStatus = 'ok' | 'error'

export interface HealthCheck {
  status: HealthStatus
  message?: string
}

export interface HealthReport {
  status: HealthStatus
  timestamp: string
  uptime: number
  checks: Record<string, HealthCheck>
}

export function buildReport(checks: Record<string, HealthCheck>): HealthReport {
  const status = Object.values(checks).every(check => check.status === 'ok')
    ? 'ok'
    : 'error'

  return {
    status,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    checks,
  }
}

export function getLivenessReport(): HealthReport {
  return buildReport({
    process: { status: 'ok' },
    memory: {
      status: 'ok',
      message: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB RSS`,
    },
  })
}

export async function getReadinessReport(event: H3Event): Promise<HealthReport> {
  const checks: Record<string, HealthCheck> = {
    runtime: checkRuntime(event),
    eventLoop: await checkEventLoop(),
  }

  return buildReport(checks)
}

function checkRuntime(event: H3Event): HealthCheck {
  try {
    const config = useRuntimeConfig(event)
    return config && typeof config === 'object'
      ? { status: 'ok' }
      : { status: 'error', message: 'Runtime config unavailable' }
  }
  catch (error) {
    return { status: 'error', message: toMessage(error) }
  }
}

async function checkEventLoop(): Promise<HealthCheck> {
  const start = performance.now()
  await new Promise(resolve => setTimeout(resolve, 0))
  const lag = performance.now() - start

  return lag < 1000
    ? { status: 'ok', message: `Event loop lag: ${lag.toFixed(1)} ms` }
    : { status: 'error', message: `Event loop blocked for ${lag.toFixed(1)} ms` }
}

function toMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}
