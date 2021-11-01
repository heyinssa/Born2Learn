const getUserId = async (id, token) => {
  const url = 'https://api.intra.42.fr/v2/users/';
  const bearer = 'Bearer ';
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: bearer + token,
      'response-Type': 'text',
    },
  };
  try {
    const fetchId = await fetch(url + id, config);
    if (fetchId.ok === false) {
      // throw new Error('서버 통신 에러');
      // 존재하지 않는 사용자를 검색 시 catch로 보내는 대신 error 문자열을 리턴해서 if 문에서 걸러지게끔.
      return 'error';
    }
    const result = await fetchId.json();
    return result.login;
  } catch (e) {
    alert('getUserId failed');
    return e;
    // 인자로 에러에 대한 정보가 들어온다. 보통은 그 에러를 송출하는 식으로 쓰인다. 서버 통신 오류나 사용자 문제로 인한 오류를 핸들링한다.
    // try catch 를 쓰는 의도는 에러를 애초에 핸들링 하기 위함
  }
};

export default getUserId;
