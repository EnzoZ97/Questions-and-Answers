import { createSlice } from "@reduxjs/toolkit";

interface listState {
    value: Array<{
        id: number, 
        question: string, 
        answers: [
            {
            answer: string,
            iscorrect: boolean,
            id: number
            },
            {
            answer: string,
            iscorrect: boolean,
            id: number
            },
            {
            answer: string,
            iscorrect: boolean,
            id: number
            },
            {
            answer: string,
            iscorrect: boolean,
            id: number
            },
        ]
    }>
}


const initialState: listState = {
    value : [
        {
            id: 1,
            question: 'What is Capital of Argentina?',
            answers: [
                {
                answer: 'Bogotá',
                iscorrect: false,
                id: 1
                },
                {
                answer: 'La Paz',
                iscorrect: false,
                id: 2
                },
                {
                answer: 'Buenos Aires',
                iscorrect: true,
                id: 3
                },
                {
                answer: 'Lima',
                iscorrect: false,
                id: 4
                },
            ]
        },
        {
            id: 2,
            question: 'What is Capital of Perú?',
            answers: [
                {
                answer: 'Lima',
                iscorrect: true,
                id: 1
                },
                {
                answer: 'Montevideo',
                iscorrect: false,
                id: 2
                },
                {
                answer: 'Caracas',
                iscorrect: false,
                id: 3
                },
                {
                answer: 'Quito',
                iscorrect: false,
                id: 4
                },
            ]
        },
        {
            id: 3,
            question: 'What is Capital of Bolivia?',
            answers: [
                {
                answer: 'Asunción',
                iscorrect: false,
                id: 1
                },
                {
                answer: 'Santiago de Chile',
                iscorrect: false,
                id: 2
                },
                {
                answer: 'Bogotá',
                iscorrect: false,
                id: 3
                },
                {
                answer: 'sucre',
                iscorrect: true,
                id: 4
                },
            ]
        },
        {
            id: 4,
            question: 'What is Capital of Ecuador?',
            answers: [
                {
                answer: 'Quito',
                iscorrect: true,
                id: 1
                },
                {
                answer: 'Lima',
                iscorrect: false,
                id: 2
                },
                {
                answer: 'Santiago de Chile',
                iscorrect: false,
                id: 3
                },
                {
                answer: 'Cayena',
                iscorrect: false,
                id: 4
                },
            ]
        } ,
        {
            id: 5,
            question: 'What is Capital of Germany?',
            answers: [
                {
                answer: 'Zagreb',
                iscorrect: false,
                id: 1
                },
                {
                answer: 'London',
                iscorrect: false,
                id: 2
                },
                {
                answer: 'Berlín',
                iscorrect: true,
                id: 3
                },
                {
                answer: 'Helsinki',
                iscorrect: false,
                id: 4
                },
            ]
        },

{
            id: 6,
            question: 'What is Capital of England?',
            answers: [
                {
                answer: 'Kingston',
                iscorrect: false,
                id: 1
                },
                {
                answer: 'Paris',
                iscorrect: false,
                id: 2
                },
                {
                answer: 'Accra',
                iscorrect: false,
                id: 3
                },
                {
                answer: 'London',
                iscorrect: true,
                id: 4
                },
            ]
        },
{
            id: 7,
            question: 'What is Capital of New Zealand?',
            answers: [
                {
                answer: 'Lisbon',
                iscorrect: false,
                id: 1
                },
                {
                answer: 'Wellington',
                iscorrect: true,
                id: 2
                },
                {
                answer: 'Port Louis',
                iscorrect: false,
                id: 3
                },
                {
                answer: 'Oslo',
                iscorrect: false,
                id: 4
                },
            ]
        },
        {
            id: 8,
            question: 'What is Capital of Poland?',
            answers: [
                {
                answer: 'Warsaw',
                iscorrect: true,
                id: 1
                },
                {
                answer: 'Doha',
                iscorrect: false,
                id: 2
                },
                {
                answer: 'Manila',
                iscorrect: false,
                id: 3
                },
                {
                answer: 'Dakar',
                iscorrect: false,
                id: 4
                },
            ]
        }
    ]
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers:{     
    }
})


export const {} = listSlice.actions;
export default listSlice.reducer;

