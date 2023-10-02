// Assistant.js




function Assistant({ explanation }) {
  return (
    <div className="assistant">
      {explanation && (
        <div className="assistant-hover-icon">
          <span>
           
          </span>
        </div>
      )}
      <div className="assistant-content" style={{ marginRight: '-2rem', border : '2px dotted #CBC3E3', borderRadius: '.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: 'white', width: 'auto', }}>
  <p style={{ color: 'black', fontWeight: 400, fontSize: '.8rem', maxWidth: '100%', wordWrap: 'break-word' }}>{explanation}</p>
</div>

    </div>
  );
}

export default Assistant;
