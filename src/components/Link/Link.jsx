import PropTypes from "prop-types";

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-4 hover:bg-slate-400 px-5 rounded-3xl"><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;