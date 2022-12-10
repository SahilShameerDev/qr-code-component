import React from "react";
import "./QrCodeBar.css";
function QrCodeBar() {
  return (
    <div className="components">
      <div className="card">
        <div>
          <div className="code">
            <img className="qrcode" src="/images/image-qr-code.png" alt="" />
          </div>
        </div>

        <div className="heading">
          <h1>
            Improve your front-end <br /> skills by building projects
          </h1>
        </div>
        <div className="description">
          <p>
            Scan the QR code to visit Frontend <br /> Mentor and take your
            coding skill to <br /> the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default QrCodeBar;
