# Team Jenna Park - FrontEnd

## 🎞 프로젝트 소개

```
AI파크는 인공지능&음성 생성 기술을 활용한 다국어 디지털 휴먼 제작 솔루션을 제공합니다.
이번 기업연계 프로젝트는 AI파크의 서비스 페이지 개선을 목표로 하는 프로젝트입니다.
(기업에서 IA, 와이어프레임, API를 제공받았습니다.)

텍스트를 입력하고 성별과 여러가지 언어의 음성을 선택하고 속도와 톤 조절을 한 후에
아바타를 선택하고 의상과 배경을 조합하여 가상 영상을 생성합니다.
```

## 🌐 배포 URL

- [Jenna Park 바로가기](https://jennapark.netlify.app)

## 📝 노션

- [Team Notion](https://quickest-asterisk-75d.notion.site/BE-FE2-UXUI3-_6-8fa79cf67ec44b688c855751b6d1c77e)

- [FE Notion](https://quickest-asterisk-75d.notion.site/Front-End-065cbe8d15924f45b0c6d22646b8cdaf)

## 📅 개발 기간

<strong>2022.09.06 ~ 2022.10.14</strong>

## 🧑‍🤝‍🧑 팀원소개

|                                               [김민구](https://github.com/kimmgu)                                               |                                              [김수현](https://github.com/Suhyxn)                                               |                                              [신재일](https://github.com/JaeIL00)                                              |                                            [김채욱](https://github.com/Kimchaewook)                                            |
| :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/102620606/195533914-06b83c84-80fd-4950-a7fa-4d5f9809a79c.jpeg" width="150"> | <img src="https://user-images.githubusercontent.com/102620606/195523910-b7a7109a-0908-46cd-b8c4-9c95207bf812.jpg" width="150"> | <img src="https://user-images.githubusercontent.com/102620606/195524024-80d99bbd-6240-4f3f-92be-066adb316d5d.jpg" width="150"> | <img src="https://user-images.githubusercontent.com/102620606/195524502-20a2195a-2385-46c9-9cf7-68aa3ee1a9b3.jpg" width="150"> |

## ⚙️ 기술스택

<div style='display: flex'>
<img src="https://user-images.githubusercontent.com/102620606/195563631-31f8fe96-335f-43a7-9855-18fb97ba6920.svg" alt="icon" width="70" height="70" />
<img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="70" height="70" />
<img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="60" height="60" />
<img src="https://techstack-generator.vercel.app/redux-icon.svg" alt="icon" width="60" height="60" />
<img style='margin-right: 10px' src="https://user-images.githubusercontent.com/102620606/195530796-135706f8-3402-4b23-9446-02699bbeca4d.svg" alt="icon" width="60" height="60" />
<img style='margin-right: 10px' src="https://user-images.githubusercontent.com/102620606/195530915-a59295d6-3e15-438c-8383-6b23fa9c44e9.svg" alt="icon" width="60" height="60" />
<img src="https://user-images.githubusercontent.com/102620606/195535976-b6f18e8d-27b9-417e-b2d4-950edef6cb97.svg" alt="icon" width="60" height="60" />

</div>

## Pages
#### 랜딩 페이지
고객이 보는 첫 화면으로 기업 설명, 기업 유튜브를 확인할 수 있고 로그인, 프로젝트 생성, 서비스 체험하기(히스토리) 이동이 가능합니다.

<img width="900" alt="스크린샷 2022-10-26 오전 12 43 32" src="https://user-images.githubusercontent.com/101620064/197838345-cd6d38d1-cf3a-4621-ab45-7d4d59e7b1a5.png">

#### 히스토리
고객이 작업했거나 작업 중인 프로젝트와 생성한 영상을 확인할 수 있습니다. 프로젝트와 영상 삭제, 이름 수정이 가능하고 영상 다운로드를 할 수 있습니다.

<img width="900" alt="스크린샷 2022-10-26 오전 12 58 01" src="https://user-images.githubusercontent.com/101620064/197838425-66c2f49e-2502-4c40-8850-ae47f1d230bd.png">

#### 프로젝트
AI 아바타 영상을 만드는 페이지 입니다. `텍스트 입력 – 텍스트 수정 – 아바타 선택` 3단계로 진행됩니다. 3단계 모두 완료 후 영상 합성을 통해 AI 아바타 영상을 생성할 수 있습니다.

<img width="900" alt="스크린샷 2022-10-26 오전 1 21 42" src="https://user-images.githubusercontent.com/101620064/197838491-241869aa-ac05-4242-b60b-150b6d3d76d0.png">

## 🪄 주요 기능

- 간편로그인 기능(구글, 카카오)
- 손쉬운 회원가입 기능
- 토큰 인증 방식을 통한 권한 예외처리
- SPA 기반 URL 관리
- 획기적인 유저인터페이스 간소화
- 리덕스를 통한 음성과 아바타 상태관리
- 사용자 이동 경로 최소화

#### 영상 작업 3단계
1. 텍스트 입력 – 음성 설정을 통해 AI의 대사와 목소리, 목소리 형태를 적용하고 문장 개별의 음성 데이터를 응답 받습니다.
2. 텍스트 수정 – 개별 문장의 텍스트와 음성 설정을 수정할 수 있습니다.
3. 아바타 선택 - AI의 아바타, 배경을 선택하고 미리보기로 확인 후 영상 합성을 통해 최종 영상을 생성합니다.


