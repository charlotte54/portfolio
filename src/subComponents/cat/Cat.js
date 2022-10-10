import React from "react";
import "./cat.scss";


export default function Cat () {

  return (
    <div class="cat">
  <div class="cat__ear"></div>
  <div class="cat__face">
    <div class="cat__eye"></div>
    <div class="cat__beard"></div>
    <div class="cat__mouth"></div>
  </div>
  <div class="cat__body">
    <div class="cat__hand">
      <div class="cat__hand__l"></div>
      <div class="cat__hand__r"></div>
    </div>
  </div>
  <div class="cat__foot">
    <div class="cat__foot__l"></div>
    <div class="cat__foot__r"></div>
  </div>
  <div class="cat__tail">
    <div class="cat__tail__l"></div>
    <div class="cat__tail__r"></div>
  </div>
</div>

    
  );
}