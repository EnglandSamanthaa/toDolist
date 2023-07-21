window.addEventListener('load', function() {
    const homeCanvas = document.getElementById('homeScreenCanvas');    
    const ctxHome = homeCanvas.getContext('2d');
    homeCanvas.width = window.innerWidth;
    homeCanvas.height = window.innerHeight;
    ctxHome.strokeStyle = "white";
    const gradient = ctxHome.createLinearGradient(0,0, homeCanvas.width, homeCanvas.height);
    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(0.5, 'white');
    gradient.addColorStop(1, 'purple');
    ctxHome.fillStyle = gradient;

    class Particle {
        constructor(effect) {
            this.effect = effect;
            this.radius = Math.random() * 3;
            this.x = this.radius + Math.random() * (this.effect.width );
            this.y = Math.random() * (this.effect.height );
            this.vx = Math.random() * 4 - 3;
            this.vy = Math.random() * 4 - 3;
            
        }
        draw(ctxHome){
            ctxHome.beginPath();
            ctxHome.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctxHome.fill();
        }
        update(){
            this.x += this.vx;
            this.y += this.vy;

            if (this.x > this.effect.width || this.x < 0) this.vx *= -1;
            if (this.y > this.effect.height || this.y < 0) this.vy *= -1;

            if(this.effect.width <= 430) this.xv = Math.random() * 1;
            this.xy = Math.random() * 1; 
        }

    }

    class Effect {
        constructor(homeCanvas){
            this.homeCanvas = homeCanvas;
            this.width = this.homeCanvas.width;
            this.height = this.homeCanvas.height;
            this.particles = [];
            this.numberOfParticles = 420;
            this.createParticles();
        }

        createParticles(){
            if (this.width <= 430) this.numberOfParticles = 100;
            for(let i = 0; i < this.numberOfParticles; i++){
                this.particles.push(new Particle(this));
            }
        }
        handleParticles(){
            this.particles.forEach(particle => {
                particle.draw(ctxHome);
                particle.update();
            });
        }
    }

    const effect = new Effect(homeCanvas);
    effect.handleParticles(ctxHome);

    function animate(){
        ctxHome.clearRect(0, 0, homeCanvas.width, homeCanvas.height);
        effect.handleParticles(ctxHome);
        requestAnimationFrame(animate);
    }

    animate();
});