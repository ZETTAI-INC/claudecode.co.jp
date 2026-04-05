(function($){
    class ModCarouselLoopImages
    {
        config = {
            speed: 10000,
        }
        containerWidth;
        animationId;

        $base;
        $stage;

        constructor($base)
        {
            this.$base = $base.scrollLeft(0);
            this.initializeSlides();
        }

        initializeSlides()
        {
            this.containerWidth = this.$base.width();
            this.cloneSlides();
            this.animate();
        }

        get slides()
        {
            return this.$base.find('>.c-carouselLoopImages--slides');
        }

        cloneSlides()
        {
            if(!this.$base.find('>.c-carouselLoopImages--slides').length){
                this.$stage = $('<figure class="c-carouselLoopImages--slides" />');
                this.$base.find('>*').appendTo(this.$stage);
                this.$stage.appendTo(this.$base);
            }
            const $baseslide = this.slides.eq(0);
            console.log($baseslide, this.slides);
            this.slides.not($baseslide).remove();
            
            $baseslide.clone().insertAfter($baseslide);
            return this;
        }

        animate()
        {
            this.$base.addClass('in');
        }

    }
    $('.c-carouselLoopImages').each(function(){
        new ModCarouselLoopImages($(this));
    });
})(jQuery);
