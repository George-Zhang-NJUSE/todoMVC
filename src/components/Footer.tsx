import * as React from 'react';
import { FilterValues } from '../reducers/filter';

type FooterPropsType = {
    unfinishedItemNum: number;
    filter: FilterValues;
    hasCompletedItems: boolean;
    hasData: boolean,
    onSetFilter: (filter: FilterValues) => void;
    onClearCompleted: () => void;
};

export default function Footer({
    unfinishedItemNum, filter, hasCompletedItems, onSetFilter, onClearCompleted, hasData
    }: FooterPropsType) {
    // 将enum转化为字符串数组
    const arrayLikeEnum = { ...FilterValues, length: Object.getOwnPropertyNames(FilterValues).length / 2 };
    const enumArray: string[] = Array.prototype.map.call(arrayLikeEnum, (v: string) => v);

    return (
        <div style={hasData ? {} : { display: 'none' }}>
            <label>{unfinishedItemNum} item{unfinishedItemNum !== 1 ? 's' : ''} left</label>
            <ul>
                {enumArray.map((value, index) =>
                    (<li
                        key={index}
                        className={filter === index ? 'selected' : ''}
                        onClick={() => onSetFilter(index)}
                    >{value}
                    </li>))}
            </ul>
            <button
                style={{ visibility: hasCompletedItems ? 'visible' : 'hidden' }}
                onClick={onClearCompleted}
            >Clear Completed
            </button>
        </div>
    );
}