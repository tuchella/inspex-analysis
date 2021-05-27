const Inspex = require('./api-client/lib');
const Max = require('max-api');
const path = require('path');

var api = new Inspex.InSpExApi()
api.basePath = "http://localhost:8081";
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};

const axis = new Inspex.AnalysisQuery();
const applied_filters = {};
	
var name_count = 0;

// This will be printed directly to the Max console
Max.post(`Loaded the ${path.basename(__filename)} script`);

// Use the 'addHandler' function to register a function for a particular message
Max.addHandler("bang", () => {
	//mockFilters((err, filters, response) => {
	api.getFilters((err, filters, response) => {
		script("hidden", "newdefault", `fsend`, 1100, 65, "send", "filter"); 
		
		Max.outlet("menu", "clear");

    if (!filters) {
      if (err) {
        JSON.stringify(err).split('\n').forEach(l => Max.post(l));
      }
      JSON.stringify(response).split('\n').forEach(l => Max.post(l));
      return;
    }

		filters.stat.forEach((e,i) => {
			const y_pos = 15 + (i*24);
			const type = e.stat.type + "." + e.stat.composition;
			
			
			createObject(`bp${i}`, 580, y_pos, 
				["bpatcher", "isx.filterui", "@args", type,
					e.start, e.end, STAT_UNIT_STYLES[e.stat.type]],
				["size", 400, 25]
			);
			script("sendbox", `bp${i}`, "presentation", 1);
			script("hidden", "connect", `bp${i}`, 0, `fsend`, 0);
			/*
			createObject(`toggle${i}`, 580, y_pos, 
				["toggle"],
				["size", 15, 15],
				["presentation", 1]
			);
			
			
			createObject(`minNum${i}`, 600, y_pos,
				["live.numbox"],
				["_parameter_range", e.start, e.end],
				["_parameter_unitstyle", STAT_UNIT_STYLES[e.stat.type]],
				["set", e.start],
				["size", 55, 15],
				["presentation", 1]
			);
			
			script("delete", `minNumPrep${i}`);
			script("hidden", "newdefault", `minNumPrep${i}`, 610, y_pos, "prepend", "set");
			
			createObject(`rslider${i}`, 660, y_pos, 
				["rslider", "@orientation", 1, "@min", e.start, "@size", e.end - e.start, "@floatoutput", 1],
				["size", 100, 15],
				["presentation", 1]
			)
			//include_in_presentation(`rslider${i}`);	
			
			createObject(`maxNum${i}`, 765, y_pos,
				["live.numbox"],
				["_parameter_range", e.start, e.end],
				["_parameter_unitstyle", STAT_UNIT_STYLES[e.stat.type]],
				["set", e.end],
				["size", 55, 15],
				["presentation", 1]
			);
			
			script("delete", `maxNumPrep${i}`);
			script("hidden", "newdefault", `maxNumPrep${i}`, 775, y_pos, "prepend", "set");
			
			createObject(`comment${i}`, 825, y_pos-3, 
				["comment", "@fixwidth", 1],
				["set", type],
				["presentation", 1]
			);
			
			
			script("delete", `pack${i}`);
			script("hidden", "newdefault", `pack${i}`, 810, y_pos, "join", 3, "@triggers", 0, 2); 
				
			script("hidden", "connect", `rslider${i}`, 0, `pack${i}`, 0);
			script("hidden", "connect", `rslider${i}`, 1, `pack${i}`, 1);
			script("hidden", "connect", `toggle${i}`, 0, `pack${i}`, 2);
					
			script("delete", `prep${i}`);
			script("hidden", "newdefault", `prep${i}`, 890, y_pos, "prepend", type); 
				
			script("hidden", "connect", `pack${i}`, 0, `prep${i}`, 0);
			script("hidden", "connect", `prep${i}`, 0, `fsend`, 0);
				
			script("hidden", "connect", `rslider${i}`, 0, `minNumPrep${i}`, 0);
			script("hidden", "connect", `rslider${i}`, 1, `maxNumPrep${i}`, 0);
			script("hidden", "connect", `minNumPrep${i}`, 0, `minNum${i}`, 0);
			script("hidden", "connect", `maxNumPrep${i}`, 0, `maxNum${i}`, 0);
			script("hidden", "connect", `minNum${i}`, 0, `rslider${i}`, 0);
			script("hidden", "connect", `maxNum${i}`, 0, `rslider${i}`, 1);
				
			script("send", `rslider${i}`, 0, e.end - e.start);
			*/	
			Max.outlet("menu", "append", type);
		});
		Max.outlet("menu", 0);
	});
	
	
	Max.post("Who you think you bangin'?");
});

const STAT_UNIT_STYLES = {
	"centroid": 3,
	"confidence": 1,
	"crest": 4,
	"duration": 2,
	"flatness": 4,
	"harmonicity": 1,
	"kurtosis": 1,  
	"loudness": 4, 
	"peak": 4,
	"peakharm": 1,
	"pitch": 3,     
	"rolloff": 3,
	"skewness": 1,
	"spread": 3
}

function createObject(name, x, y, params, ...messages) {
	script("delete", name);
	script(["newdefault", name, x, y].concat(params));
	messages.forEach(msg => {
		if (msg[0] == "size") {
			script("size", name, msg[1], msg[2]);
		} else {
			script(["send", name].concat(msg));
		}
	});
}

function script(args) {
	if (!Array.isArray(args)) {
		args = Array.prototype.slice.apply(arguments);
	}
	Max.outlet(["script"].concat(args));
}

function include_in_presentation(name) {
	script("send", name, "presentation", 1);
}

Max.addHandler("setaxis", (x,y,z) => {
	axis.x = parseStat(x);
	axis.y = parseStat(y);
	axis.z = parseStat(z);
});

Max.addHandler("setfilter", (stat, start, end, enabled) => {
	if (enabled > 0) {
		const f = new Inspex.StatFilter();
		f.stat = parseStat(stat);
		f.start = start;
		f.end = end;
		applied_filters[stat] = f;
	} else {
		delete applied_filters[stat];
	}
});

Max.addHandler("getmeta", (id) => {
  api.getSlice(id, (err, slice, response) => {
    if (err) {
      Max.post(err);
      Max.post(response);
    } else {
      for (const key in slice.meta) {
        Max.outlet("meta", key, slice.meta[key]);
      }
    }
  });
});

Max.addHandler("getname", () => {
	name_count++;
	var name = axis.x.type + "." + axis.x.composition + "_";
	for (const [key, f] of Object.entries(applied_filters)) {
 		name += key + "[" + f.start.toFixed(2) + "-" + f.end.toFixed(2) + "]"
	}
	name += "-" + name_count;
	Max.outlet("name",name);
});

Max.addHandler("run", () => {
	const query = new Inspex.AnalysisQuery();
	query.x = axis.x;
	query.y = axis.y;
	query.z = axis.z;
	query.limit = 128;
	query.stats = Object.values(applied_filters);
	
	Max.post("runin'");
	
	const request = {
		body: query
	}
	
	api.runAnalysis(request, (err, slices, response) => {
		Max.post("done " + response);
		if (err) {
			console.log(err);
		} else {
			try{
        slices.sort((a,b) => a.x-b.x);
        const range = {
          x : {
            min: slices.map(e => e.x).reduce((a,b) => Math.min(a,b)), 
            max: slices.map(e => e.x).reduce((a,b) => Math.max(a,b))
          },
          y : {
            min: slices.map(e => e.y).reduce((a,b) => Math.min(a,b)), 
            max: slices.map(e => e.y).reduce((a,b) => Math.max(a,b))
          },
          z : {
            min: slices.map(e => e.z).reduce((a,b) => Math.min(a,b)), 
            max: slices.map(e => e.z).reduce((a,b) => Math.max(a,b))
          },
        };
        const buckets = {
          x: [0,0,0,0,0,0,0,0,0,0,0],
          y: [0,0,0,0,0,0,0,0,0,0,0],
          z: [0,0,0,0,0,0,0,0,0,0,0]
        }
        
        Max.outlet("slice", -1, "file", axis.x.type, axis.y.type, axis.z.type, "start", "end", "duration");
        slices.forEach((e,i) => {
          for(var c of ['x','y','z']) {
            const bucket = Math.min(Math.floor(((e[c] - range[c].min) / (range[c].max - range[c].min)) * (buckets[c].length)), buckets[c].length - 1);
            buckets[c][bucket]++;
          }
          /*
          bucket = Math.floor(((e.y - range.y.min) / (range.y.max - range.y.min)) * buckets.y.length);
          buckets.y[bucket]++;
          bucket = Math.floor(((e.z - range.z.min) / (range.z.max - range.z.min)) * buckets.z.length);
          buckets.z[bucket]++;
          */
          const file = e.file.split("_")[0] + "/" + e.file; // TODO: This should just return the filename
                                                            // prepending the folder here is an ugly quick fix
          Max.outlet("slice", e.id, file, e.x, e.y, e.z, e.start, e.end, e.duration);
        });
        Max.outlet(["bucket", "x"].concat(buckets.x));
        Max.outlet(["bucket", "y"].concat(buckets.y));
        Max.outlet(["bucket", "z"].concat(buckets.z));
        Max.post(slices.length);
			}catch(ex) {
				Max.outlet("error", JSON.stringify(ex));
			}
		}
	});
	
});

function parseStat(name) {
	const stat = new Inspex.Stat();
	stat.type = name.split(".")[0];
	stat.composition = name.split(".")[1];
	return stat;
}

// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler("echo", (msg) => {
	Max.outlet(msg);
});

function mockFilters(callback) {
	const filters = {
  "stats": [
    {
      "stat": {
        "type": "centroid",
        "composition": "mean"
      },
      "start": -44.8287239074707,
      "end": 16148.474609375
    },
    {
      "stat": {
        "type": "crest",
        "composition": "dmedian"
      },
      "start": -36.91088104248047,
      "end": 5263.23291015625
    },
    {
      "stat": {
        "type": "crest",
        "composition": "min"
      },
      "start": -12.800929069519045,
      "end": 26.1320743560791
    },
    {
      "stat": {
        "type": "duration",
        "composition": "none"
      },
      "start": 127.7097505668644,
      "end": 22801.995464852604
    },
    {
      "stat": {
        "type": "loudness",
        "composition": "dstddev"
      },
      "start": 0,
      "end": 61.25382995605469
    },
    {
      "stat": {
        "type": "peak",
        "composition": "median"
      },
      "start": -313.0711975097656,
      "end": 0.518946647644043
    },
    {
      "stat": {
        "type": "peak",
        "composition": "stddev"
      },
      "start": 0,
      "end": 264.8001403808594
    },
    {
      "stat": {
        "type": "pitch",
        "composition": "median"
      },
      "start": -12.800929069519045,
      "end": 9559.681640625
    },
    {
      "stat": {
        "type": "pitch",
        "composition": "stddev"
      },
      "start": 0,
      "end": 4543.5341796875
    },
    {
      "stat": {
        "type": "rolloff",
        "composition": "max"
      },
      "start": 32.2998046875,
      "end": 22045.859375
    },
    {
      "stat": {
        "type": "rolloff",
        "composition": "min"
      },
      "start": -12.800929069519045,
      "end": 21898.654296875
    },
    {
      "stat": {
        "type": "skewness",
        "composition": "median"
      },
      "start": -12.800929069519045,
      "end": 117.03568267822266
    }
  ],
  "meta": [
    {
      "key": "file",
      "values": [
        "10_0001_hoseladeoffe_IVY.wav",
        "10_0003_hoseladeoffe_IVY_UQW.wav",
        "10_0004_hoseladeoffe_IVY_MAG_XAY.wav",
        "11_0001_cheroweee_TAB.wav",
        "11_0002_cheroweee_TAB_HUG.aif",
        "12_0001_Jazzyshazzy_HUG.aif",
        "12_0002_Jazzyshazzy_HUG_CRG.wav",
        "12_0003_Jazzyshazzy_HUG_XAY.wav",
        "13_0001_funwithfeedback_CRG.wav",
        "13_0002_funwithfeedback_CRG_WGX.wav",
        "14_0001_birds_XAY.wav",
        "14_0002_birds_XAY_UQW.wav",
        "14_0003_birds_XAY_UQW_XAY.wav",
        "15_0001_ghost_XAY.wav",
        "15_0003_ghost12345_XAY_HFC+19_0005_Club mate_UYM_HUG_TLH EDIT.wav",
        "15_0003_ghost12345_XAY_HFC.wav",
        "16_0001_horn_XAY.wav",
        "16_0002_horn_XAY_WGX.wav",
        "17_00001_Ucranian report.wav",
        "17_00002_Ucranian report but its actually Happy Birthday by Putin_HUG.aif",
        "18_0001_Geige1_HFC.wav",
        "18_0002_Geige2_HFC.wav",
        "18_0003_Geige3_HFC  .wav",
        "18_0004_Geige4_HFC.wav",
        "18_0005_Geige5_HFC.wav",
        "18_0006_Harmonica1_HFC.wav",
        "18_0007_Harmonica2_HFC.wav",
        "18_0008_Harmonica3_HFC.wav",
        "18_0009_Geigen12345_HFC_UQW.wav",
        "18_0009_Violine1_HFC .wav",
        "18_0010_Violine2_HFC.wav",
        "18_0011_Violine3_HFC .wav",
        "18_0012_Violine4_HFC .wav",
        "18_0013_Violine5_HFC    .wav",
        "18_0014_Harmonica123_HFC_UQW.wav",
        "18_0015_Harmonica123pad_HFC_UQW_UQW.wav",
        "18_0016_Harmonica123utrapad_HFC_UQW_UQW_UQW.wav",
        "19_0001_Club mate.wav",
        "19_0002_Club mate_UYM.aif",
        "19_0003_Club mate_UYM.aif",
        "19_0004_Club mate_UYM.aif",
        "19_0005_Club mate_UYM_HUG.aif",
        "20_0001_Chinese report 1.wav",
        "20_0002_Chinese report 2.wav",
        "21_0001_oiseaux_XAY.wav",
        "22_0001_shaker_XAY.wav",
        "22_0002_shaker_XAY_UQW.wav",
        "22_0003_shaker_XAY_UQW_UQW.wav",
        "23_0001_whuu_AZD.wav",
        "23_0002_whuu_AZD_CRG.wav",
        "23_0003_whuu_AZD_XAY.wav",
        "24_0001_JuraWald.wav",
        "24_0002_JuraWald_UQW.wav",
        "24_0003_JuraWald_whistlesGROUP_UQW.wav",
        "24_0004_JuraWald_TEXTURE_UQW.wav",
        "25_0001_meshesoftheearlymorning_WGX.wav",
        "25_0002_meshesoftheearlymorning_WGX_UQW.wav",
        "25_0003_meshesoftheearlymorning_WGX_MAG.wav",
        "25_0004_meshesoftheearlymorning_WGX_UQW_XAY_XAY.wav",
        "25_0005_meshesoftheearlymorning_WGX_UQW_XAY.wav",
        "26_0001_suspense_KXE.aif",
        "26_0002_suspense_KXE_HUG.aif",
        "26_0003_suspense_KXE_HUG_XAY.wav",
        "27_0001_incontent_CRG & AZD .wav",
        "27_0002_incontent_CRG & AZD_UQW.wav",
        "27_0003_incontent_CRG & AZD_XAY.wav",
        "28_0001_tnetnocni_AZD&CRG.wav",
        "29_0001_celloktrone_viber_UQW.wav",
        "29_0002_celloktrone_viber_UQW_UQW.wav",
        "29_0003_celloktrone_viber2_UQW.wav",
        "29_0004_celloktrone_viber2_UQW_XAY.wav",
        "29_0005_celloktrone_viber_UQW_XAY.wav",
        "2_0001_zzzzerreissprobe_UQW.wav",
        "2_0002_zzzzerreissprobe_UQW_YAR.aif",
        "2_0003_zzzzerreissprobe_UQW_OZK.wav",
        "2_0004_zzzzerreissprobe_JAR_OZK.wav",
        "2_0004_zzzzerreissprobe_JAR_OZK_TLH.wav",
        "2_0005_zzzzerreissprobe_UQW_CRG.wav",
        "2_0006_zzzzerreissprobe_JAR_OZK_HUG.aif",
        "2_0007_zzzzerreissprobe_JAR_OZK_XAY.wav",
        "30_0001_nousnavonspasdeau_WGX.wav",
        "30_0002_nousnavonspasdeau_WGX_TAB.aif",
        "31_0001_udäpickedup_UYM.aif",
        "31_0002_udäpickedup_UYM_UQW.wav",
        "31_0004_udäpickedup_UYM_UKW_MAG_XAY.wav",
        "32_0002_Maxdrums_MAG_UYM.aif",
        "32_0003_Maxdrums_MAG_UYM_XAY.wav",
        "32_0004_Maxdrums_MAG_UYM_ZGT.wav",
        "33_0001_DerTeufelAmKlavier_HUG.aiff",
        "33_0002_DevilPiano2_HUG.aif",
        "33_0003_DerTeufelAmKlavier_HUG_UQW.wav",
        "33_0004_DerTeufelAmKlavier_HUG_UQW.aif",
        "33_0005_DevilPiano2_HUG_XAY.wav",
        "34_0001_guitarmonixrRIDDIM_UQW.wav",
        "34_0002_guitarmonixrRIDDIM_UQW_TAB.wav",
        "34_0003_guitarmonixrRIDDIM_UQW_XAY.wav",
        "35_0001_clickykicky_UQW.wav",
        "35_0002_clickykicky_UQW_UQW.wav",
        "35_0003_clickykicky_UQW_UQW_HUG.aif",
        "35_0004_clickykicky_UQW_UQW_HUG_AZD.wav",
        "36_0001_i_love_youre_stories_UQW.wav",
        "36_0002_i_love_youre_stories_UQW_XAY.wav",
        "36_0003_i_love_youre_stories_UQW_XAY_XAY.wav",
        "36_0004_i_love_youre_stories_UQW_XAY_XAY_UQW.wav",
        "37_0001_light_and_colours_UQW & TAB.wav",
        "37_0002_light_and_colours_UQW & TAB_XAY.wav",
        "38_0001_ichkannkeinrussich_MAG.wav",
        "38_0002_ichkannkeinrussisch_MAG_HUG.aif",
        "39_0001_fever_KXE.wav",
        "39_0002_fever_KXE_HUG.aif",
        "39_0003_fever_KXE_XAY.wav",
        "3_0001_rigidrone_HUG.wav",
        "3_0002_rigidrone_HUG_YAR.aiff",
        "3_0003_rigidrone_HUG_YAR_UYM.aif",
        "3_0003_rigidrone_HUG_YAR_UYM_YAR.aif",
        "3_0004_rigidrone_HUG_YAR_UYM_AZD.wav",
        "3_0005_rigidrone_HUG_YAR_UYM_AZD_HUG.aif",
        "40_0001_intheroom_KXE.wav",
        "40_0002_intheroom_KXE_HUG.aif",
        "41_0001_troete_WGX.wav",
        "41_0002_troete_WGX_CRG.wav",
        "41_0003_troete_AMP.wav",
        "42_0001_ninenine_CRG.wav",
        "42_0002_ninenine_CRG_AMP.wav",
        "42_0003_ninenine_CRG_AMP_ZAG.wav",
        "42_0004_ninenine_CRG_AMP_ZAG_MAG.wav",
        "42_0005_Tape_NXQ.wav",
        "43_0001_Copycat_ZGT.wav",
        "43_0002_Copycat_ZGT_TLH.wav",
        "43_0003_Copycat_KXE.wav",
        "43_0004_Copycat_ZGT_TLH_KXE_UYM.aif",
        "44_0001_String_NXQ.aif",
        "44_0002_String_NXQ_CRG.wav",
        "45_0001_i don_t understand_UYM.aif",
        "46_0001_ghostbell001_TLH.wav",
        "47_0001_vaporizer_001_TLH.wav",
        "47_0002_vaporizer_TLH_UYM.aif",
        "48_0001_intensify_001_TLH.wav",
        "48_0002_intensify_001_TLH_AZD.wav",
        "49_0001expiration_001_TLH.wav",
        "4_0001_badmoodF_OZK_TLH.wav",
        "4_0002_badmoodI_OZK_UYM.aif",
        "4_0003_badmoodI_OZK_UYM_WGX.wav",
        "50_0001_aromat_IVY.wav",
        "50_0002_aromat_IVY_OZK.wav",
        "50_0003_aromat_IVY_UQW.wav",
        "51_0001_chicken_UYM.aif",
        "51_0002_chicken_UYM.aif",
        "5_0002_bliblablo_MAG_YAR.aif",
        "5_0003_bliblablo_MAG_YAR_UQW.wav",
        "5_0004_bliblabloRISER_MAG_YAR_UQW_UQW.wav",
        "5_0005_bliblablo_MAG_YAR_XAY.wav",
        "5_0006_bliblablo_MAG_YAR_UQW_UQW.wav",
        "5_0007_bliblablo_MAG_YAR_UQW_UQW_UQW.wav",
        "6_0001_ohdahsöti_WGX.wav",
        "6_0002_ohdahsöti_WGX_TAB.wav",
        "6_0003_ohdahsöti_WGX_TAB_YAR.aif",
        "6_0004_ohdasöti_WGX_HUG.aif",
        "7_0001_sander_AZD.wav",
        "7_0001_sander_AZD_TLH.wav",
        "7_0002_sander_IVY.wav",
        "8_0003_oooooo_KXE.aif",
        "8_0004_oooooo_IVY.wav",
        "9_0001_hackbrettoverdrive_TAB.aif",
        "9_0002_hackbrettoverdrive_TAB_UYM.aif",
        "9_0003_hackbrettoverdrive_TAB_XAY.wav",
        "Chicken drums .wav",
        "exemple only - 1_0001_violinImpulse_POL.aif",
        "exemple only - 1_0002-violinImpulse_MUT.aif",
        "ghost1.wav",
        "ghost2.wav",
        "ghost3.wav",
        "ghost4.wav"
      ]
    }
  ]
};

	callback(null, filters, {});


}
