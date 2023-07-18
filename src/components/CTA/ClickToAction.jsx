import './ClickToAction.scss';

export default function ClickToAction(props, value) {
  return (
    <div className="callToAction">
    <button className='callToAction'>{props.value}</button>
    </div>
  )
}
