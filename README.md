# 우집사 추천 AD 모듈

모바일 웹에서 사용할 수 있는 반응형 카테고리 리스트 UI 모듈입니다.

## 기능

- 투명한 배경 위에 UI 표시
- 카테고리 버튼 클릭 시 아이템 리스트 표시/숨김
- 아이템 클릭 시 외부 링크로 이동
- iframe으로 쉽게 다른 웹사이트에 삽입 가능
- 반응형 디자인 (모바일: 393px, PC: 500px)

## 파일 구조

- `index.html` - 메인 UI 구조
- `styles.css` - 스타일 정의
- `script.js` - 카테고리 접기/펼치기 및 닫기 기능
- `iframe-test.html` - iframe 삽입 테스트 페이지
- `images/` - 이미지 파일 저장 폴더

## 사용 방법

1. 프로젝트 파일을 서버에 업로드합니다.
2. 원하는 웹페이지에 다음 코드를 추가합니다:

```html
<iframe src="경로/index.html" allowtransparency="true" scrolling="no" style="width: 100%; max-width: 500px; height: 100vh; border: none; background-color: transparent;"></iframe>
```

## 반응형 동작

- 모바일 환경 (480px 이하): 최대 너비 393px
- PC 환경: 최대 너비 500px

## 커스터마이징

- `styles.css` 파일에서 색상, 크기, 여백 등을 조정할 수 있습니다.
- `index.html` 파일에서 카테고리와 아이템 내용을 수정할 수 있습니다.
- 원하는 이미지를 `images/` 폴더에 추가하고 HTML에서 경로를 업데이트하세요. 