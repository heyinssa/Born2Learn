# Born To Learn

![npm](https://img.shields.io/npm/v/npm?style=flat)
![express](https://img.shields.io/badge/-ExpressJs-232323?logo=express&logoColor=white&style=flat)
![42seoul](https://img.shields.io/badge/-42Seoul-325916?logo=42&logoColor=white&style=flat)
![react](https://img.shields.io/badge/-ReactJs-40AEF0?logo=react&logoColor=white&style=flat)

WMPB는 보다 큰 피씬 경험을 위한 웹 서비스입니다.

현대의 웹 서비스는 많은 수의 피씬과 복잡하게 구성된 서브젝트를 관리하는 웹 기반 플랫폼입니다.
일정 규모 이상의 피씬을 제작하기 위해선 쉬운 배포, 편한 접근성이 있어야 합니다.
WMPB는 제젝자와 피씨너간의 연결을 도와주는 환경을 제공합니다.

빠르고 생산성 높은 피씬 배포를 위해 각 피씬들은 github로 관리합니다.

# 핵심기능

Born To Learn은 피신 제작자와 카뎃분들을 이어주는 플랫폼입니다! 2주간의 해커톤 너무 고생많으셨습니다. 앞으로도 좋은 피신 많이 제작해주시면 좋겠습니다 :)

- 피신 탐색, 등록

- 등록한 피신의 서브젝트 register

- register할때마다 새로운 git repository생성 (제출용 레포지토리로 사용)

- subject set finish 클릭시 자동으로 해당 서브젝트를 참여하고 있는 사람 중 랜덤 3명 매칭!

- 평가 시간은 자유롭게 결정 후, 피드백을 남겨주시면 됩니다!

<br>

# Usage

## 피씬 제작자

### Step 1

`오픈소스 교육과정 github 주소를 가져와주세요! `

### Step 2

`Born To Learn에 들어와서 피신 등록 ( + 버튼 )을 눌러서 교육과정 Github 레포를 올려주세요!`

### Step 3

`끝!`

```
github repository는 아래와 같은 구조를 가지고 있어야 합니다!

main
ㄴ subject-00
   ㄴ README.md // subject 01 소개 페이지
ㄴ subject-01
   ㄴ README.pdf // subject 02 소개 페이지
ㄴ subject-02
   ㄴ README.html // subject 03 소개 페이지
ㄴ README.md // piscine 소개 페이지
```

각 서브젝트 디렉토리의 네이밍 규칙은 없습니다! 단, README.md 파일을 가지고 있어야 합니다!
만약 Markdown이 아니라 pdf, html 파일이여도 괜찮습니다! 파일 이름만 README로 맞춰주세요!!

<br/>
<br/>
<br/>

## 피신 참가자

### Step 1

`회원가입을 진행해주세요!`

### Step 2

`로그인을 진행해 주세요!`

### Step 3

`자유롭게 피신을 등록하고 도전해보세요!`

<br>

# Contributors

| ycha               | suhshin            | sham     | echung   | sehyan | klim |
| ------------------ | ------------------ | -------- | -------- | ------ | ---- |
| backend + frontend | frontend + backend | frontend | frontend | css    | css  |

<br/>
<br/>
<br/>
<br/>
<br/>

## Release note (2021.11.08)

- GitLab auto repository generator
- SSL cert
- Register
- peer to peer evaluate log
- add piscine button(for piscine builder)

## Release note (2021.11.02)

- Markdown Viewer update
- PDF Viewer Update
- Pattern Lock Update
- Intra id Sync

## Comming soon

- personal github sync
- password change
- cancel subject
- cancel piscine
