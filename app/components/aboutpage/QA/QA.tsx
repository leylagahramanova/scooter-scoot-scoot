"use client"
import React, { useState } from 'react';
import './QA.css';
import { TypeCategory, categories } from './qas';

const QA: React.FC = () => {
    // Use a React state hook to manage which question's answer is visible
    // The state will hold the IDs of the category and question that are currently active (or null if none are active)
    const [activeQuestion, setActiveQuestion] = useState<{ categoryId: number | null; questionId: number | null }>({
        categoryId: null,
        questionId: null,
    });

    // Function to handle clicking a question
    const toggleQuestion = (categoryId: number, questionId: number) => {
        // If the clicked question is already active, deactivate it. Otherwise, activate the clicked question.
        if (activeQuestion.categoryId === categoryId && activeQuestion.questionId === questionId) {
            setActiveQuestion({ categoryId: null, questionId: null }); // Close the currently open question
        } else {
            setActiveQuestion({ categoryId, questionId }); // Open the clicked question
        }
    };

    return (
        <div className="frequenters">
            <div className="titleq"><h2>FAQs</h2></div>
            <div className="frequenters2">
            {categories.map((category) => (
                <div key={category.id} className="frequent">
                    <div className="category"><h3>{category.category}</h3></div>

                        <div className="rectangles">
                        {category.questions.map((question) => (
                        <div key={question.id} className="rectangle" onClick={() => toggleQuestion(category.id, question.id)}>
                            <div className="qa">
                                <div className="question"><h4>{question.question}</h4></div>
                                {(activeQuestion.categoryId === category.id && activeQuestion.questionId === question.id) && (
                                    <div className="answer"><p>{question.answer}</p></div>
                                )}
                            </div>
                            <div className={`arrow ${activeQuestion.questionId === question.id ? 'activearrow' : ''}`}></div>
                        </div>
                               ))}
                        </div>
             
                </div>
            ))}
            </div>
        
        </div>
    );
};

export default QA;