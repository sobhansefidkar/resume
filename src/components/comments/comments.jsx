/** @format */

import "./comments.css";
import Icon from "react-icons-kit";
import { phone } from "react-icons-kit/fa/phone";
import { mailForward } from "react-icons-kit/fa/";

function Comments() {
  return (
    <div id="comment" className='comment-section'>
      <div className='comment-title'>
        <h2>ارتباط با من</h2>
      </div>
      <div className='comment-container'>
        <div className='comment-left'>
            <div>
                <div className="top">
                    <span>سبحان</span>
                    <span>sobhansefidkar146@gmail.com</span>
                </div>
                <div className="bottom">
                    <p>خیلی عالی</p>
                </div>
            </div>
            <div>
                <div className="top">
                    <span>سبحان</span>
                    <span>sobhansefidkar146@gmail.com</span>
                </div>
                <div className="bottom">
                    <p>خیلی عالی</p>
                </div>
            </div>
        </div>
        <div className='comment-right'>
          <div className='input-side'>
            <div>
                <input type="text" placeholder="اسم" />
                <input type="text" placeholder="ایمیل" />
            </div>
            <textarea placeholder="متن" cols="35" rows="10"></textarea>
            <button>ارسال</button>
          </div>
          <div className='info-side'>
            <div>
              <div>
                <Icon style={{margin : "5px"}} size={25} icon={phone}></Icon>
                <span>تماس</span>
              </div>
              <span>09017409939</span>
            </div>
            <div>
              <div>
                <Icon style={{margin : "5px"}} size={25} icon={mailForward}></Icon>
                <span>ایمیل</span>
              </div>
              <span>sobhansefidkar146@gmail.com</span>
            </div>
            <div>
              <div>
                <Icon style={{margin : "5px"}} size={25} icon={mailForward}></Icon>
                <span>آدرس</span>
              </div>
              <span>مشهد</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
