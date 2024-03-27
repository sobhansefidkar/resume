/** @format */

import "./resume.css";

function Resume() {
  return (
    <div id="resume" className='resume-section'>
      <div className='resume-title'>
        <h2>رزومه</h2>
      </div>
      <div className='resume-container'>
        <div className='resume-item fir'>
          <div className='shadow'>
            <span>سبد خرید</span>
          </div>
        </div>
        <div className='resume-item sec'>
          <div className='shadow'>
            <span>صفحه محصول</span>
          </div>
        </div>
        <div className='resume-item thi'>
          <div className='shadow'>
            <span>صفحه اصلی</span>
          </div>
        </div>
        <div className='resume-item for'>
          <div className='shadow'>
            <span>محصولات</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
