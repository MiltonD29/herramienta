import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

import { DatamatProvider } from '../../providers/datamat/datamat';


@IonicPage()
@Component({
  selector: 'page-mate',
  templateUrl: 'mate.html',
})
export class MatePage {

  @ViewChild('slides') slides: any;

  hasAnswered: boolean = false;
  score: number = 0;

  slideOptions: any;
  questions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DatamatProvider) {
  }

  ionViewDidLoad() {

      this.slides.lockSwipes(true);

      this.dataService.load().then((data) => {

          data.map((question) => {

              let originalOrder = question.answers;
              question.answers = this.randomizeAnswers(originalOrder);
              return question;

          });

          this.questions = data;

      });

  }

  ngAfterViewInit(){
    this.slides.paginationType = "progress";
  }

  nextSlide(){
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
  }

  selectAnswer(answer, question){

      this.hasAnswered = true;
      answer.selected = true;
      question.flashCardFlipped = true;

      if(answer.correct){
          this.score++;
      }

      setTimeout(() => {
          this.hasAnswered = false;
          this.nextSlide();
          answer.selected = false;
          question.flashCardFlipped = false;
      }, 2000);
  }

  randomizeAnswers(rawAnswers: any[]): any[] {

      for (let i = rawAnswers.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = rawAnswers[i];
          rawAnswers[i] = rawAnswers[j];
          rawAnswers[j] = temp;
      }

      return rawAnswers;

  }

  restartQuiz() {
      this.score = 0;
      this.slides.lockSwipes(false);
      this.slides.slideTo(1, 1000);
      this.slides.lockSwipes(true);
  }

  navInicio(){
    this.navCtrl.setRoot(HomePage);
  }

}
