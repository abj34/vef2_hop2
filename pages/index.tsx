import Layout from '../components/Layout';

export default function Index() {

    return (
        <Layout title='Home'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulam vel lacus vitae sapien
                rutrum ornare ut nec odio. Nam et tellus sed ipsum imperdiet accumsan ac id eros.
                Interdum et malesuada fames ac ipsum primis in faucibus. Praesent sodales hendrerit
                massa, non tincidunt diam ullamcorper ac. Integer mauris nulla, blandit id libero, 
                tristique posuere felis. Vivamus amet fringilla ex. Duis vel neque lorem. Quisque 
                imperdiet dapibus a mollis. Nullam dictum pellentesque lacus at cursus. Sed
                sagittis nibh. Praesent faucibus mi faucibus tellus molestie luctus. Phasellus ut 
                condimentum elit. Curabitur suscipit porta leo, vel venenatis lectus porta at.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Nullam vel lacus sed ligula gravida cursus. Aenean venenatis aliquam sem.
            </p>
            <br />
            <p>Quisque faucibus arcu vitae pulvinar malesuada. Vestibulum consequat, lorem vitae 
                dignissim ultricies, libero mi pharetra est, ac consectetur magna lacus et orci.
                Sed rhoncus libero eget mattis interdum. Curabitur vel commodo ex. Aliquam nec 
                mauris pretium odio fringilla dictum. Ut sed facilisis erat, non facilisis ligula.
                Nulla nec ante pretium, tempor ante malesuada, iaculis sapien.
            </p>
            <div className='images'>
                <img src='https://source.unsplash.com/IzmdWT2lW5Q' />
                <img src='https://source.unsplash.com/ViEBSoZH6M4' />
                <img src='https://source.unsplash.com/qDgTQOYk6B8' />
            </div>
        </Layout>
    );
}
