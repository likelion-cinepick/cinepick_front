import React from 'react'

const KeywordMbti = () => {
    const mbti = [
        { text: 'ESTJ' },
        { text: 'ISFP' },
        { text: 'INTP' },
        { text: 'ENTJ' },
        { text: 'ENFP' },
        { text: 'INTJ' },
        { text: 'ISTJ' },
        { text: 'ESFP' },
        { text: 'ESTP' },
        { text: 'ISFJ' },
        { text: 'INFP' },
        { text: 'ENFJ' },
        { text: 'ENTP' },
        { text: 'INFJ' },
        { text: 'ESFJ' },
        { text: 'ISTP' },
      ];
  return (
    <div className='mbti_components'>
        {mbti.map((mbti, index)=>(
            <div key={index} className='item'>
                <p>{mbti.text}</p>
            </div>
        ))}
    </div>
  )
}

export default KeywordMbti