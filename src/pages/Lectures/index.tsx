import { ReactNode } from 'react';

import {LectureInstall} from './LectureInstall';
import {LectureHello} from './LectureHello';
import {LectureStructure} from './LectureStructure';
import {LectureTypes} from './LectureTypes';
import {LectureVars} from './LectureVars';
import {LectureWorkWithVars} from './LectureWorkWithVars';
import {LectureAssignment} from './LectureAssignment';
import {LectureStrings} from './LectureStrings';
import {LectureConsole} from './LectureConsole';
import {LectureEquality} from './LectureEquality';
import {LectureCondition} from './LectureCondition';
import {LectureCycle} from './LectureCycle';
import {LectureArrays} from './LectureArrays';
import {LectureMethods} from './LectureMethods';

export const lectureMap: {[id: string]:ReactNode} = {
  '1': <LectureInstall/>,
  '2': <LectureHello/>,
  '3': <LectureStructure/>,
  '4': <LectureTypes/>,
  '5': <LectureVars/>,
  '6': <LectureWorkWithVars/>,
  '7': <LectureAssignment/>,
  '8': <LectureStrings/>,
  '9': <LectureConsole/>,
  '10': <LectureEquality/>,
  '11': <LectureCondition/>,
  '12': <LectureCycle/>,
  '13': <LectureArrays/>,
  '14': <LectureMethods/>,
}