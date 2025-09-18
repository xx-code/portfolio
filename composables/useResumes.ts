import dayjs from 'dayjs';

export interface ResumeType {
    title: string,
    detail: string,
    startDate: Date,
    endDate?: Date,
    isCurrent: boolean,
    type: string
}

const resumeData: Array<ResumeType> = [
    {
        title: 'Orion',
        startDate: new Date(2018, 6),
        endDate: new Date(2018, 9),
        isCurrent: false,
        type: 'Work',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
    {
        title: 'Bachelor in computer application',
        startDate: new Date(2016, 10),
        endDate: new Date(2020, 10),
        isCurrent: false,
        type: 'Education',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
    {
        title: 'Freelancer',
        startDate: new Date(2020, 9),
        endDate: new Date(2022, 1),
        isCurrent: false,
        type: 'Work',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur'
    },
    {
        title: 'TechnoDream',
        startDate: new Date(2017, 1),
        endDate: new Date(2017, 10),
        isCurrent: false,
        type: 'Work',
        detail: 'Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
    {
        title: 'Stagaire Safir a Consulting',
        startDate: new Date(2021, 1),
        endDate: new Date(2021, 10),
        isCurrent: false,
        type: 'Work',
        detail: 'Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
    {
        title: 'Maitrise Informatique Intelligence Artificiel',
        startDate: new Date(2021, 7),
        endDate: new Date(2024, 4),
        isCurrent: false,
        type: 'Education',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
    {
        title: 'Stagaire In Intelligence Artificiel - MTY Group',
        startDate: new Date(2023, 9),
        endDate: new Date(2024, 4),
        isCurrent: false,
        type: 'Work',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
    {
        title: 'Lead developper - MTY Group',
        startDate: new Date(2024, 5),
        endDate: undefined,
        isCurrent: true,
        type: 'Work',
        detail: 'Superatis Tauri montis verticibus qui ad solis ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro. spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro'
    },
];




export interface TimeLineResumeType {
    id: string
    title: string,
    content: string,
    color: string
    isCurrent: boolean,
    startPointInPercent: number
    widthBarInPercent: number
    timeInYear: {
        startTime: string,
        endTime: string
    }
    type: string
}


const colors = ["#FFB801", "#47DE3A", "#0C83FD", "#ed1e78"];

export default function useResumes(): Ref<TimeLineResumeType[]> {
    const { t } = useI18n();
    const resumes = ref<TimeLineResumeType[]>([])

    const sortedData = resumeData.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    const dayDate = new Date(Date.now());
    const startDate = sortedData[0].startDate;
    const totalWeeks = dayjs(startDate).diff(dayjs(dayDate), 'week')

    sortedData[sortedData.length - 1].startDate.getFullYear();
    let pickerIndex = 0;
    sortedData.forEach((data, index) => {
        const end = data.endDate ? data.endDate : dayDate;

        const timeWidth = dayjs(data.startDate).diff(dayjs(end), 'week') * 100 / totalWeeks;
        // if (data.startDate == end) {
        //     width = ((end.getMonth() - data.startDate.getMonth()) * 0.1) * 100 / totalWeeks;
        // }

        // Build resume info
        const info: TimeLineResumeType = {
            id: index.toString(),
            title: data.title,
            content: data.detail,
            color: colors[pickerIndex],
            startPointInPercent: Math.abs(((dayjs(startDate).diff(dayjs(data.startDate), 'week') * 100) / totalWeeks)),
            widthBarInPercent: timeWidth,
            timeInYear: {
                startTime: data.startDate.toISOString(),
                endTime: data.endDate ? data.endDate.toISOString() : t('now')
            },
            isCurrent: false,
            type: data.type
        };

        pickerIndex++;
        pickerIndex = pickerIndex > 3 ? 0 : pickerIndex;
        resumes.value.push(info);
    });
    return resumes
}