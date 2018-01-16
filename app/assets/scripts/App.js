import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var revealFeaturesOnScroll = new RevealOnScroll($(".feature-item"), "85%");
var revealTestimonialsOnScroll = new RevealOnScroll($(".testimonial"), "60%" );
