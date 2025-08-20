import React from 'react'

function SkillsPercentage({skillsName,percentage='0%'}) {
  return (
    <div className='mt-14 animate-[rotate_1s_ease-in-out]' >
<h2 className='text-2xl pl-3 pb-2'>{skillsName}</h2>
    <div className='bg-slate-800 w-80 h-7 rounded-2xl'>
        <div style={{width:percentage}} className={`h-full rounded-2xl gradientBg flex justify-center`}>{percentage}</div>
    </div>
    </div>
  )
}
export default SkillsPercentage