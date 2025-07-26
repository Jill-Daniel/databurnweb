import React from 'react';

const Transcripts = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h2>📄 Transcript Section</h2>
      <p>You can download your academic transcripts here:</p>
      <a
        href="/path/to/sample-transcript.pdf"
        download
        style={{
          display: 'inline-block',
          padding: '12px 20px',
          backgroundColor: '#a51c30',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          marginTop: '20px',
        }}
      >
        ⬇ Download Transcript PDF
      </a>
    </div>
  );
};

export default Transcripts;
