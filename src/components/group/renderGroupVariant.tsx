import React from 'react'
import GroupWith4Columns from './variants/groupWith4Columns.component'
import GroupWith2IrregularColumns from './variants/groupWith2IrregularColumn.component'

export default function renderGroupVariant(variant: string, items: any) {
    const allVariants: any = {
        "drift.group.group-with-4-columns": <GroupWith4Columns {...items}/>,
        "drift.group.group-with-2-irregular-columns": <GroupWith2IrregularColumns {...items}/>,
    }
    return (
        allVariants[variant]
    )
}
