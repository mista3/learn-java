export const getNoun = (number:number, one:string, two: string, five: string) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }  
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

export const getReadLectures = () => {
  const readLecturesUnparsed = localStorage.getItem('readLectures');
  return (readLecturesUnparsed ? JSON.parse(readLecturesUnparsed) : []) as string[];
}

export const addLectureToRead = (id: string) => {
  const readLectures = getReadLectures();
  if (!readLectures.includes(id)) {
    localStorage.setItem('readLectures',JSON.stringify([...readLectures, id]))
  }
}

