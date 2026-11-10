export default defineEventHandler(async (event) => {
  const report = await getReadinessReport(event)

  if (report.status === 'error') {
    setResponseStatus(event, 503)
  }

  return report
})
