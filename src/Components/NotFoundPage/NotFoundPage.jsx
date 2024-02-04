import '../NotFoundPage/NotFoundPage.scss'

export default function NotFoundPage() {
  return (
    <div className='page-container'>
      <div>
        <p className='middle-size-text'>London is the capital of Great Britain</p>
        <p className='small-size-text'>but</p>
        <p className='the-biggiest-size-text'>404</p>
        <p className='middle-size-text'>is the page not found :(</p>
        <p className='middle-size-text'>Sorry!</p>
      </div>
      <img src="/src/assets/london.jpeg" alt="London" className='londonImg'/>
    </div>
  )
}