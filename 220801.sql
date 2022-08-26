CREATE DATABASE sesac;

USE sesac;

-- sesac 데이터베이스 사용하겠다..

CREATE TABLE
    user (
        ID varchar(10) not null primary key,
        name varchar(5) not null default '',
        birthday date not null
    );

ALTER TABLE user drop column birthday;

ALTER TABLE user add column birthday date not null;

DROP TABLE user;

-- TRUNCATE TABLE 테이블명; 테이블 초기화

-- SHOW DATABESE;

-- USE  데이터베이스명;

-- SHOW TABLES;

-- desc 테이블명; 테이블 구조 보여줌

CREATE TABLE
    member (
        ID varchar(20) not null primary key,
        name varchar(5) not null,
        age int(2) null,
        gender varchar(2) not null,
        email varchar(50) null,
        promotion varchar(2) null default 'x'
    );

ALTER TABLE member MODIFY COLUMN ID varchar(10);

ALTER TABLE member Alter COLUMN gender SET default '여';

-- default 값을 바꿀 때에는 Alter set default

ALTER TABLE member DROP COLUMN promotion;

ALTER TABLE member MODIFY COLUMN interest varchar(100);

ALTER TABLE member DROP COLUMN age;

ALTER TABLE member ADD COLUMN promotion varchar(2) null default 'x';

ALTER TABLE
    member MODIFY COLUMN interest varchar(100) AFTER promotion;

-- 열 순서 변경하기 자료형까지 적어주어야 함..

INSERT INTO
    user (ID, name, birthday)
VALUES ('id1', '홍길동', '2022-08-01');

-- 행 삽입

SELECT * FROM user;

SELECT ID, name FROM user WHERE name = '홍길동' AND id = 'id1';

SELECT * FROM user WHERE name = '홍길동' ORDER BY ID DESC;

SELECT * FROM user ORDER BY ID DESC LIMIT 2;

SELECT name, birthday FROM user;

-- BETWEEN A AND B

SELECT * FROM player WHERE height BETWEEN 160 AND 180;

-- 160 이상 180 이하. == AND

-- IN

SELECT * FROM player WHERE position IN ('striker', 'goalkeeper');

-- == OR

-- LIKE

SELECT * FROM user WHERE name LIKE '%리';

UPDATE user SET name = '홍길동' WHERE ID != '';

-- 행 수정

UPDATE user
SET
    name = '홍길동',
    birthday = '2022-08-01'
WHERE ID != 'id2';

-- 행 수정

DELETE FROM user WHERE ID = 'id1';

DROP TABLE user;

CREATE TABLE
    user (
        id varchar(10) not null primary key,
        pw varchar(20) not null,
        name varchar(5) not null,
        gender ENUM('F', 'M', '') default '',
        birthday DATE not null,
        age int(3) not null default 0
    );

INSERT INTO
    user (
        id,
        pw,
        name,
        gender,
        birthday,
        age
    )
VALUES (
        'hong1234',
        '8o4bkg',
        '홍길동',
        'M',
        '1990-01-31',
        33
    );

INSERT INTO
    user (
        id,
        pw,
        name,
        gender,
        birthday,
        age
    )
VALUES (
        'sexysung',
        '87awjkdf',
        '성춘향',
        'F',
        '1992-03-31',
        31
    );

INSERT INTO
    user (
        id,
        pw,
        name,
        gender,
        birthday,
        age
    )
VALUES (
        'power70',
        'qxur8sda',
        '변사또',
        'M',
        '1970-05-02',
        53
    );

INSERT INTO
    user (
        id,
        pw,
        name,
        gender,
        birthday,
        age
    )
VALUES (
        'hanjo',
        'jk48fn4',
        '한조',
        'M',
        '1984-10-18',
        39
    );

INSERT INTO
    user (
        id,
        pw,
        name,
        gender,
        birthday,
        age
    )
VALUES (
        'widowmaker',
        '38ewifh3',
        '위도우',
        'F',
        '1976-06-27',
        47
    );

INSERT INTO
    user (
        id,
        pw,
        name,
        gender,
        birthday,
        age
    )
VALUES (
        'dvadva',
        'k3f3ah',
        '송하나',
        'F',
        '2001-06-03',
        22
    );

INSERT INTO
    user (
        id,
        pw,
        name,
        gender,
        birthday,
        age
    )
VALUES (
        'jungkrat',
        '4ifha7f',
        '정크랫',
        'M',
        '1999-11-11',
        24
    );

CREATE TABLE
    visitor (
        id int not null primary key auto_increment,
        name varchar(10) not null,
        comment mediumtext null
    );

INSERT INTO visitor (ID, name, comment) VALUES (1, '홍길동', '내가 왔다');