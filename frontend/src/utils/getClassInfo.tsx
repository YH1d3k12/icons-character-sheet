import allClasses from '../data/allClasses';

const classMap = new Map(allClasses.map(cls => [cls.summary.id, cls]));

export function getClassInfo(id: number) {
    const cls = classMap.get(id);
    return cls ? cls.summary : null;
}
