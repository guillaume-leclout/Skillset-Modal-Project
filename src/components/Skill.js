import EditSkill from './EditSkill';

function Skill(props) {
  return (
    <div className="min-w-[350px] max-h-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">{props.level}</p>
        </div>

        <EditSkill
          id={props.id}
          name={props.name}
          level={props.level}
          updateSkill={props.updateSkill}
        />
      </div>
    </div>
  );
}

export default Skill;
