

interface questionType {
    "question": string,
    "answer": string[],
    type: 'radio' | 'number',
    prerequisite?: any

}
export const questions: (questionType[])[] = [
    [
        {
            "question": "Is your business model B2C or B2B or both?",
            "answer": [" B2C", " B2B", " both"],
            "type": 'radio',
            "prerequisite": {}
        },
        {
            "question": "Do you target all age brackets?",
            "answer": [" yes", " no"],
            "type": 'radio',
            "prerequisite": { [1]: ["B2B", "both"] }

        },
        {
            "question": "Do you target all industries?",
            "answer": [" yes", " no"],
            "type": 'radio',
            "prerequisite": { [1]: ["B2C", "both"] }

        },
    ],
    [
        {
            "question": "Did you have an investment?",
            "answer": [" yes", " no"],
            "type": 'radio',
            "prerequisite": {}

        },
        {
            "question": "how much was the investment?",
            "answer": [""],
            "type": 'number',
            "prerequisite": { [4]: ["yes"] }

        },
    ]
]