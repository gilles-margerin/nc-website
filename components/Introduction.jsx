import Link from 'next/link'

function Introduction(props) {
  return(
    <div class='intro'>
        <p>{props.language.intro[0]}</p>
        <p>{props.language.intro[1]}</p>
        <Link href="/contact">
          <a class="contact-btn" type='button'>{props.language.intro[2]}</a>
        </Link>
    </div>
  )
}

export default Introduction