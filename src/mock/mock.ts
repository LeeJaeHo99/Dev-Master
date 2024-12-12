import { tableData, studyDataType } from '../types/types';

export const mockTableData: tableData[] = [
    {
        sort: "긴급",
        title: "안녕하세요 운영자 입니다.",
        date: "2019-05-19",
        writer: "운영자",
    },
    {
        sort: "공지",
        title: "안녕하세요 운영자 입니다할렐루야.",
        date: "2019-05-19",
        writer: "운영자",
    },
    {
        sort: "공지",
        title: "똥먹어라.",
        date: "2019-05-19",
        writer: "운영자",
    },
    {
        sort: "공지",
        title: "똥먹어라똥먹어라",
        date: "2019-05-19",
        writer: "운영자",
    },
    {
        sort: "공지",
        title: "똥먹어라똥먹어라똥먹어라",
        date: "2019-05-19",
        writer: "운영자",
    },
];

export const mockGoalData: string[] = [
    'TypeScript 마스터',
    '프로젝트 끝내기',
    'NextJs 마스터',
    'JavaScript 마스터',
]

export const mockAnnounceData: {date: string, company: string, text: string}[] = [
    {
        date: '2024-12-28',
        company: '카카오',
        text: '프론트엔드 공개채용',
    },
    {
        date: '2024-12-28',
        company: '카카오',
        text: '프론트엔드 공개채용',
    },
    {
        date: '2024-12-28',
        company: '카카오',
        text: '프론트엔드 공개채용',
    },
    {
        date: '2024-12-28',
        company: '카카오',
        text: '프론트엔드 공개채용',
    },
    {
        date: '2024-12-28',
        company: '카카오',
        text: '프론트엔드 공개채용',
    },
    {
        date: '2024-12-28',
        company: '쿠팡',
        text: '프론트엔드 공개채용',
    },
]

export const mockStudyData: studyDataType[] = [
    {
        subject: 'HTML', 
        progress: 66,
    },
    {
        subject: 'CSS', 
        progress: 66,
    },
    {
        subject: 'JS', 
        progress: 80,
    },
    {
        subject: 'TS', 
        progress: 66,
    },
    {
        subject: 'React', 
        progress: 75,
    },
    {
        subject: 'NextJS', 
        progress: 70,
    },
]