 function minSubString(s, t) {
     let n = s.length;
     if (n == 0) {
         return "np";
     }
     let mapt = {};
     let maps = {};
     t.split('').map(key => mapt[key] = mapt[key] || 0 + 1);
     let r = 0;
     let l = 0;
     let formed = 0;
     let count = Object.keys(mapt).length;
     let min = [0, n, Number.MAX_SAFE_INTEGER];
     while (r <= n) {
         let char = s.charAt(r)
         maps[char] = maps[char] || 0 + 1;
         if (maps[char] && mapt[char] == maps[char]) {
             formed++;
         }
         while (formed == count) {
             let cL = s.charAt(l);
             if (min[2] > r - l + 1) {
                 min = [l, r, r - l + 1]
             }
             maps[cL]--;
             if (mapt[cL] && maps[cL] < mapt[cL]) {
                 formed--;
             }
             l++
         }

         r++;
     }
     if (min[2] == Number.MAX_SAFE_INTEGER) {
         return "n";
     }
     return s.substring(min[0], min[1] + 1)

 }

 console.log(minSubString("ADOBECODEBANC", "ABC"));