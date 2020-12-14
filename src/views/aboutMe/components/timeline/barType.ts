interface BarTime {
    startTime: string,
    endTime: string
};

export default interface BarContent {
    id: string, 
    time: BarTime, 
    title: string, 
    content: string, 
    color: string, 
    widthBarInPercent?: number, 
    startPointInPercent?: number
};