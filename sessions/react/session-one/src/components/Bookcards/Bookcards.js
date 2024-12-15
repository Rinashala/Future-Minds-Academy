import './BookCard.css'

function BookCard({ book }) {
    let numOfPages = book.pages;
    let cl;

    if (numOfPages <= 200) {
        cl = 'Easy';
    }
    else if (numOfPages <= 500) {
        cl = 'Medium'
    }
    else {
        cl = 'Hard';
    }

    function BookCard({ book }) {
        let numOfPages = book.pages;
        let cl;

        if (numOfPages <= 200) {
            cl = 'Easy';
        }
        else if (numOfPages <= 500) {
            cl = 'Medium'
        }
        else {
            cl = 'Hard';
        }

        return <div className={`Book-Card ${cl}`}>
            <div className='Card-Details'>
                <h3 className='Card-Header'>{book.title}</h3>
                <h4 className='Card-SubHeader'>{book.author}</h4>
            </div>
        </div>
    }


    return <div className={`Book-Card ${cl}`}>
        <div className='Card-Details'>
            <h3 className='Card-Header'>{book.title}</h3>
            <h4 className='Card-SubHeader'>{book.author}</h4>
        </div>
    </div>
}

export default BookCard;