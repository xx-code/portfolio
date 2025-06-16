interface time{
    startTime: string,
    endTime: string
};

export interface bar {
    id: string, 
    time: time, 
    title: string, 
    content: string, 
    color: string, 
    widthBarInPercent?: number, 
    startPointInPercent?: number
};

