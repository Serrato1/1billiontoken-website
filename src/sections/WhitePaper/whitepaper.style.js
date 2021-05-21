import styled from "styled-components";

const WhitePaperWrapper = styled.div`
  padding: 100px 0;

  .title__wrapper {
    text-align: center;
  }

  .subscribe-box-bg {
    position: relative;
    padding: 100px 0;

    &:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 43px;
      background: rgb(200, 56, 231);
      background: linear-gradient(
        94deg,
        rgba(200, 56, 231, 1) 0%,
        rgba(31, 42, 213, 1) 100%
      );
      content: "";
      opacity: 0.65;
    }
  }
  .pdf-viewer-container{
      margin-top:50px;
      display:flex;
      flex-direction:column;
      align-items:center;
      width: 300px;
      height: 300px;
  }
  .pdf-viewer-container iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
  .form-box {
    position: relative;
    margin-top: 70px;
    button {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #fff;
      width: 220px;
      border-radius: 10px;
      border: none;
      transition: all 0.3s ease-in;
      background: rgb(200, 56, 231);
      background: linear-gradient(
        270deg,
        rgba(200, 56, 231, 1) 0%,
        rgba(31, 42, 213, 1) 100%
      );
      &:hover {
        background: rgb(200, 56, 231);
        background: linear-gradient(
          270deg,
          rgba(31, 42, 213, 1) 0%,
          rgba(200, 56, 231, 1) 100%
        );
      }
    }
    .input__wrapper {
      input {
        height: 80px;
        padding-left: 28px;
        border-radius: 10px;

        &::placeholder {
          color: #280d57;
        }
      }
    }
  }

  @media only screen and (max-width: 912px) {
    .subscribe-box-wrapper {
      .subscribe-box-bg {
        padding: 100px 30px;
      }
    }
  }
  @media only screen and (max-width: 568px) {
    .pdf-viewer-container{
        width: 200px;
        height: 200px;
    }
  }

`;

export default WhitePaperWrapper;
