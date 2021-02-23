/* eslint-disable prettier/prettier */
/**
 *
 * 정규식
 *     
 
1. 확장문자 (: backslash)
    - s : 공백 문자(스페이스, 탭, 폼 피드, 라인 피드)
 
    - b : 단어의 경계
    - B 이를 제외한 모든 문자 매칭
 
    - d : 숫자
    - D : 숫자가 아닌 문자 [^0-9] 와 동일
 
    - w : 알파벳, 숫자로 된 문자, 밑줄 기호(_) [A-Za-z0-9]
    - W : w의 반대 문자 [^A-Za-z0-9]
 
    - 특수문자 : 특수문자 자체를 의미 예) + (+ 기호 자체)
 
2. 특수문자
    - * : 0회 이상 반복
    - + : 1회 이상 반복
    - ? : 0 또는 1개의 문자 매칭
    - . : 정확히 1개 문자 매칭
 
3. 플래그
    - g : 전역매칭
    - i : 대소문자 무시
    - m : 여러 줄 매칭
 
4. 기타
    - () : 괄호로 묶인 패턴은 매칭된 다음, 그 부분을 기억한다.
    - $1,...,$9 : 괄호로 갭처한 부분 문자열이 저장 됨.
    - | : ~또는~
    - {} : 반복 횟수

    ##############  간단한 정규 표현식
var re = /a/         --a 가 있는 문자열
var re = /a/i        --a 가 있는 문자열, 대소문자 구분 안함
var re = /apple/    -- apple가 있는 문자열
var re = /[a-z]/    -- a~z 사이의 모든 문자
var re = /[a-zA-Z0-9]/    -- a~z, A~Z 0~9 사이의 모든 문자
var re = /[a-z]|[0-9]/  -- a~z 혹은 0~9사이의 문자
var re = /a|b|c/   --  a 혹은 b 혹은 c인 문자
var re = /[^a-z]/  -- a~z까지의 문자가 아닌 문자("^" 부정)
var re = /^[a-z]/  -- 문자의 처음이 a~z로 시작되는 문장
var re = /[a-z]$/  -- 문자가 a~z로 끝남

##############  간단한 응용예제
 
 
var re = /s$/;          -- 공백체크
var re = /^ss*$/;   -- 공백문자 개행문자만 입력 거절
var re = /^[-!#$%& amp;'*+./0-9=?A-Z^_a-z{|}~]+@[-!#$%&'*+/0-9=?A-Z^_a-z{|}~]+.[-!#$%& amp;'*+./0-9=?A-Z^_a-z{|}~]+$/; --이메일 체크
var re = /^[A-Za-z0-9]{4,10}$/ -- 비밀번호,아이디체크 영문,숫자만허용, 4~10자리
var re = new RegExp("(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)","gi") -- 홈페이지 체크

var re = "<[^<|>]*>";  -- 태그제거 
var re = /[<][^>]*[>]/gi;-- 태그제거 
str = str.replace(RegExpTag,""); 

var RegExpJS = "<script[^>]*>(.*?)</script>";  -- 스크립트 제거  
str = str.replace(RegExpJS,""); 

var RegExpCSS = "<style[^>]*>(.*?)";  -- 스타일 제거  
str = str.replace(RegExpCSS,""); 

var RegExpHG = "(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)";  -- 한글 제거  
str = str.replace(RegExpHG,"");  
 
var RegExpDS = /<!--[^>](.*?)-->/g;   -- 주석 제거  
str6 = str.replace(RegExpDS,""); 

var regExp = /[a-z0-9]{2,}@[a-z0-9-]{2,}.[a-z0-9]{2,}/i; --이메일 체크


## 기타 응용
re = new RegExp("^@[a-zA-Z0-9]+s+","i");//문장의 처음이 @이고 문자가 1나 이상 있으면 ok





기타 url
https://beomy.tistory.com/21
 */



 /**
  * 
  [^...] : 대괄호 안의 문자를 제외한 모든 문자 
    \w  : 밑줄 문자를 포함한 영어, 숫자 문자에 매칭 [A-Za-z0-9_] 와동일 

  */
 

export const allReg = () => {

    let string = "abcd";

    string = string
        // 
        .replace(/[^\w-_.]/g) 
        .replace(/[^\w-_.]/g) 
        .replace(/[^\w-_.]/g) 
        .replace(/[^\w-_.]/g) 
        .replace(/[^\w-_.]/g) 
        .replace(/[^\w-_.]/g) 


    return string;
}
// 특정문자 제외 나머지 제거  -> 파벳과 - _ . 제외 제거
export const reg1 = string => {
  const reg = /[^a-zA-Z\\-\\_\\.\\s]/g;
  return string.replace(reg, "");
};

// 특정문제 제거  -> a-z 제거
export const reg2 = string => {
    const reg = /[a-z]/g;
    return string.replace(reg, "");
}

// . 1번이상 
export const reg3 = string => {
    const reg = /\.+/g;
    return string.replace(reg, "");
}

// 처음이나, 끝에 . 이 있다면 제거
export const reg4 = string => {
    const reg = /^\.*|\.$/g;
    return string.replace(reg, "");
}
