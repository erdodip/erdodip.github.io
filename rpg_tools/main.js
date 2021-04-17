// make labyrinth board, figure
// add text to a result
// turn counter
// special counters, add text to a counter
// special coin head ship, rpg variation

// flip coin too
function roll_with_dice(dice_type,modifier,number) {
  let result_list=[];

  for (i=0;i<number;i++) {
    let result=Math.floor(Math.random()*dice_type)+1;
    result+=modifier;
    result<1?result=0:result;
    result_list.push(result);
  }
  return result_list;
}

function filp_coin (number) {
  let result_list=[];
  var head=0;
  for (i=0;i<number;i++) {
    let result=Math.floor(Math.random()*2)+1;
    if (result<2) {result='X';head++;} else {result='O';}
    result_list.push(result);
  }
  result_list.push(head);
  result_list.push(number-head);
  return result_list;
}

function write_out_the_result(result_list,box_id) {
  if (box_id==1) {
    document.querySelector('.result_box_1').setAttribute('value',result_list);
    document.querySelector('#result_info_box_1').innerHTML='Sort: '+result_list.sort();
  } else {
    document.querySelector('#result_info_box_2').innerHTML='Head: O='+result_list.pop()+', Tail: X='+result_list.pop();
    document.querySelector('#result_box_2').setAttribute('value',result_list);
  }
}

document.querySelector('#btn-roll').addEventListener('click',()=>{
  // Convert number from string with `*1`
  let dice_type=document.querySelector('#dice_type').value*1;
  let modifier=document.querySelector('#modifier').value*1;
  let number=document.querySelector('#number').value*1;
  write_out_the_result(roll_with_dice(dice_type,modifier,number),1);
});

document.querySelector('#btn-flip').addEventListener('click',()=>{
  // Convert number from string with `*1`
  let number=document.querySelector('#coin_number').value*1;
  write_out_the_result(filp_coin(number),2);
});

document.querySelector('#dice_type').addEventListener('change',()=>{
  let is_coin_selected=(document.querySelector('#dice_type').value==2);
  document.querySelector('#label_dice_type').innerHTML=is_coin_selected?'O':'Dice';
});