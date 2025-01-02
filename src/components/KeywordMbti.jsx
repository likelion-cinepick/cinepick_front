const KeywordMbti = ({ selectedMbtis = [], onMbtiSelect }) => {
  const mbtiList = [
    'ESTJ', 'ISFP', 'INTP', 'ENTJ', 'ENFP', 'INTJ',
    'ISTJ', 'ESFP', 'ESTP', 'ISFJ', 'INFP', 'ENFJ',
    'ENTP', 'INFJ', 'ESFJ', 'ISTP',
  ];

  const isSelected = (mbti) => selectedMbtis.includes(mbti);

  return (
    <div className="mbti_components">
      {mbtiList.map((mbti) => (
        <div
          key={mbti}
          className={`item ${isSelected(mbti) ? 'selected' : ''}`}
          onClick={() => onMbtiSelect(mbti)}
        >
          {mbti}
        </div>
      ))}
    </div>
  );
};
export default KeywordMbti;
