## Question Format

All quiz questions are stored in `questions.json` and follow a consistent structure.

Each question object contains:

- **id**: A unique identifier for the question (e.g., `Q1`)
- **topic**: The DevOps topic the question belongs to (e.g., Continuous Integration)
- **question**: The question text
- **options**: An array of possible answers
- **answerIndex**: The correct answer’s index in the `options` array (0-based)
- **explanation**: A brief explanation of why the answer is correct

### Example

```json
{
  "id": "Q1",
  "topic": "Continuous Integration",
  "question": "What is the primary goal of Continuous Integration?",
  "options": [
    "Automatically deploy to production",
    "Frequently integrate code changes into a shared repository",
    "Eliminate the need for testing",
    "Remove the need for branches"
  ],
  "answerIndex": 1,
  "explanation": "Continuous Integration aims to detect integration issues early."
}
```

##Features1
