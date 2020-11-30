import Link from 'next/link'

function Introduction(props) {
  return(
    <div className='intro'>
        <p>{props.language.intro[0]}</p>
        <p>{props.language.intro[1]}</p>
        <Link href="/contact">
          <a className="contact-btn">{props.language.intro[2]}</a>
        </Link>
    </div>
  )
}

export default Introduction