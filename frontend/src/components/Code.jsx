import React, { useState } from "react";
import "./Code.css";

function Code() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };

  return (
    <div>
      <pre className="code">
        <code>
          <p className="comment">
            {showContent
              ? "// Cliquez ce bouton \\/ pour cacher mes compétences et mes langues"
              : "// Cliquez ce bouton > pour afficher mes compétences et mes langues"}
          </p>
          <br />
          <button type="button" onClick={toggleContent}>
            {showContent ? "\\/" : ">"}
          </button>
          {showContent && (
            <>
              <br />
              <br />
              const <span className="constante">languages</span> = [
              <br />
              <span className="table">"Français"</span>,
              <br />
              <span className="table">"Langue des signes française"</span>,
              <br />
              <span className="table">"Anglais"</span>,
              <br />
              <span className="table">"Arabe"</span> ];
              <br />
              <br />
              console.log(<span className="constante">languages</span>);
              <br />
              <br />
              const <span className="constante">skills</span> = [
              <br />
              <span className="table">"HTML & CSS"</span>,
              <br />
              <span className="table">"JavaScript & React"</span>,
              <br />
              <span className="table">"PHP"</span>,
              <br />
              <span className="table">
                "API (Application Programming Interface)"
              </span>
              ,
              <br />
              <span className="table">"Node.js & Express.js"</span>,
              <br />
              <span className="table">"SQL & MySQL"</span>,
              <br />
              <span className="table">"Git & GitHub"</span> ];
              <br />
              <br />
              console.log(<span className="constante">skills</span>);
              <br />
            </>
          )}
        </code>
      </pre>
    </div>
  );
}

export default Code;
