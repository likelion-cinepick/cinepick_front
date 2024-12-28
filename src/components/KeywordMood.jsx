import React from 'react'

const KeywordMood = () => {
    const moods = [
      { icon: '🔥', text: '따뜻한' },
      { icon: '💭', text: '생각이 필요한' },
      { icon: '🎶', text: '경쾌한' },
      { icon: '🌟', text: '재밌는' }, 
      { icon: '💌', text: '달달한' },
      { icon: '🎬', text: '실제의' },
      { icon: '🩸', text: '무서운' },
      { icon: '🎀', text: '보기 좋은' },
      { icon: '💥', text: '짧고 강렬한' },
      { icon: '🍀', text: '희망찬' },
      { icon: '💡', text: '교훈 있는' },
      { icon: '⚒️', text: '잔혹한' },
      { icon: '🧩', text: '모호한' },
      { icon: '🔗', text: '심오한' },
      { icon: '💎', text: '용감한' },
    ];
  
    return (
      <div className="mood_components">
        {moods.map((mood, index) => (
          <div key={index} className="item">
            <p>{mood.icon}</p>
            <p>{mood.text}</p>
          </div>
        ))}
      </div>
    );
  };

export default KeywordMood