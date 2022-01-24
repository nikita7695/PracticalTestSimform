/*

    Navigation scroll to anchor w/ URL routing using pushstate

*/

(function () {
    var global = this;

    // Initial setup
    // =============

    // Map dependancies to local variables
    var _          = global._;
    var $          = global.jQuery;
    var Backbone   = global.Backbone;

    // Constructor
    // ===========

    var App = (global.App || (global.App = { }));

    var Navigation = App.Navigation = function (options) {

        var defaults = {
            selectors: {
                nav_item: '.nav-list-item',
                hdr_logo: '.hdr-logo'
            }
        };

        this.config         = $.extend(true, defaults, options || { });

        this._initialize();
    };


    // Initialization
    // ==============

    Navigation.prototype._initialize = function () {
        this._registerInstanceVars();
        this._initializeRouter();
        this._addClickEvent();
    };

    Navigation.prototype._initializeRouter = function () {

        // Solves scope issue
        var that = this;
        var NavRouter = Backbone.Router.extend({

            routes: {
                ""                  : "index",
                "home"              : "index",
                "about"             : "about",
                "social"            : "social",
                "how-it-works"      : "howItWorks",
                "previous-winners"  : "previousWinners"
            },

            index: function() {
                that._scrollToSection("Hero");
            },

            about: function() {
                that._scrollToSection("About");
            },

            social: function() {
                that._scrollToSection("Social");
            },

            howItWorks: function() {
                that._scrollToSection("HowItWorks");
            },

            previousWinners: function() {
                that._scrollToSection("PreviousWinners");
            }
        });

        this.navRouter = new NavRouter();

    };


    Navigation.prototype._registerInstanceVars = function () {
        this.$nav_items = $(this.config.selectors.nav_item);
        this.$hdr_logo = $(this.config.selectors.hdr_logo);
    };


    Navigation.prototype._addClickEvent = function () {
        var handler = _(this._handleEventClick).bind(this);
        this.$nav_items.on('click', handler);
        this.$hdr_logo.on('click', handler);
    };


    Navigation.prototype._handleEventClick = function (evt) {
        evt.preventDefault();

        this.$currentTarget = $(evt.currentTarget);
        this.selected_nav = this.$currentTarget.data('section');
        this.selected_nav_slug = this.$currentTarget.data('slug');

        this._hangleUrlRouting();
    };


    // Handles if the slug is already present in the url. If different slug execute trigger,
    // If same but just scrolled further down thepage call internal history and load..
    Navigation.prototype._hangleUrlRouting = function () {
        if(Backbone.history.fragment !== this.selected_nav_slug) {
            this.navRouter.navigate("/" + this.selected_nav_slug, {trigger: true});
        }else {
            Backbone.history.loadUrl(Backbone.history.fragment);
        }
    };


    Navigation.prototype._scrollToSection = function (section) {
        var id = "#" + section;

        $('html, body').animate({
            // Need to account for the header
            scrollTop: $(id).offset().top - 109
        }, 2000);

    };


    Navigation.prototype._setActiveState = function () {
        this.$nav_selectors.removeClass(this.config.selectors.active);
        this.$currentTarget.addClass(this.config.selectors.active);
    };


}).call(this);
