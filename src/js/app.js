$(document)
  .ready(function () {

    function imgs() {
        let acomulador;
        for (let i = 1; i <= 263; i++) {
            
            
            if(i > 196){
                acomulador = `
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a class="thumbnail" href="src/img/img (${i}).jpg" data-toggle="modal" data-target="#exampleModal${i}">
                      <img class="img-thumbnail"
                           src="src/img/img (${i}).jpg">
                  </a>
              </div>
              <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <img class="img-thumbnail"
                    src="src/img/img (${i}).jpg">
                    </div>
                    </div>
                </div>
                </div>
            
            `+ acomulador
            }else{
                acomulador = `
                <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                      <a class="thumbnail" href="src/img/img (${i}).JPG" data-toggle="modal" data-target="#exampleModal${i}">
                          <img class="img-thumbnail"
                               src="src/img/img (${i}).JPG">
                      </a>
                  </div>
                  <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <img class="img-thumbnail"
                        src="src/img/img (${i}).JPG">
                        </div>
                        </div>
                    </div>
                    </div>
                
                `+ acomulador
            }
        }
        document.getElementById("img-repeat").innerHTML = acomulador
    }
    imgs()
  });

