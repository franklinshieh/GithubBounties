const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;

const NavEntry = (props) => (
  <li className='indigo accent-2'>
    <Link className='white-text' to={props.loggedIn && (props.data.name !== 'Bounties') ? props.data.url : '/login'}>{props.data.name}</Link>
  </li>
);

module.exports = NavEntry;
