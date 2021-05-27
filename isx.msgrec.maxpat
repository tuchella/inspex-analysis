{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 1,
			"revision" : 3,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 34.0, 77.0, 1065.0, 850.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "open" ],
					"patching_rect" : [ 920.0, 510.0, 42.0, 22.0 ],
					"text" : "t open"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "live.text",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 927.0, 468.0, 44.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 73.0, 44.0, 15.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_enum" : [ "val1", "val2" ],
							"parameter_type" : 2,
							"parameter_longname" : "live.text[2]",
							"parameter_mmax" : 1,
							"parameter_shortname" : "live.text[1]"
						}

					}
,
					"text" : "open",
					"varname" : "live.text[2]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-57",
					"maxclass" : "live.text",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 927.0, 426.0, 44.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 56.0, 73.0, 44.0, 15.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_enum" : [ "val1", "val2" ],
							"parameter_type" : 2,
							"parameter_longname" : "live.text[1]",
							"parameter_mmax" : 1,
							"parameter_shortname" : "live.text[1]"
						}

					}
,
					"text" : "clear",
					"varname" : "live.text[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-54",
					"maxclass" : "live.text",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 678.0, 373.0, 44.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 37.0, 90.0, 30.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_enum" : [ "val1", "val2" ],
							"parameter_type" : 2,
							"parameter_longname" : "live.text",
							"parameter_mmax" : 1,
							"parameter_shortname" : "live.text"
						}

					}
,
					"text" : "PLAY",
					"texton" : "PLAY",
					"varname" : "live.text"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-53",
					"maxclass" : "live.text",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 678.0, 191.0, 44.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 5.0, 90.0, 27.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_enum" : [ "val1", "val2" ],
							"parameter_type" : 2,
							"parameter_longname" : "record",
							"parameter_mmax" : 1,
							"parameter_shortname" : "record"
						}

					}
,
					"text" : "REC",
					"texton" : "REC",
					"varname" : "record"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-52",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 747.0, 633.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-51",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 770.0, 159.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-38",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 747.0, 594.0, 113.0, 22.0 ],
					"text" : "r #0recordedmsg"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-28",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 747.0, 248.0, 153.0, 22.0 ],
					"text" : "prepend #0recordedmsg"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-27",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "int" ],
					"patching_rect" : [ 808.0, 530.0, 32.0, 22.0 ],
					"text" : "t b 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "stop" ],
					"patching_rect" : [ 690.5, 435.0, 38.0, 22.0 ],
					"text" : "t stop"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "bang", "bang", "" ],
					"patching_rect" : [ 678.0, 403.0, 44.0, 22.0 ],
					"text" : "sel 1 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "int" ],
					"patching_rect" : [ 678.0, 303.0, 32.0, 22.0 ],
					"text" : "t b 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "bang", "bang", "" ],
					"patching_rect" : [ 678.0, 266.0, 44.0, 22.0 ],
					"text" : "sel 1 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "int" ],
					"patching_rect" : [ 678.0, 222.0, 29.5, 22.0 ],
					"text" : "t i i"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 747.0, 213.0, 42.0, 22.0 ],
					"text" : "gate 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-132",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 863.0, 436.5, 35.0, 22.0 ],
					"text" : "clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-130",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 747.0, 436.5, 96.0, 22.0 ],
					"text" : "prepend append"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-125",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "bang", "bang", "", "bang" ],
					"patching_rect" : [ 747.0, 303.0, 85.5, 22.0 ],
					"text" : "t b b l b"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-121",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 879.0, 352.0, 67.0, 22.0 ],
					"text" : "loadmess \\;"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-120",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 747.0, 393.0, 151.0, 22.0 ],
					"text" : "join 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-119",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 813.0, 352.0, 38.0, 22.0 ],
					"text" : "zl.reg"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-118",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "float", "" ],
					"patching_rect" : [ 747.0, 352.0, 41.166666666666629, 22.0 ],
					"text" : "timer"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-114",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "bang", "bang" ],
					"patching_rect" : [ 747.0, 494.0, 141.0, 22.0 ],
					"save" : [ "#N", "qlist", ";", "#X", "insert", 1419.385400004684925, 0, ";", ";", "#X", "insert", 690.866799995303154, "1000recordedmsg", "nice", 4, 5, 9, ";", ";", "#X", "insert", 960.161800004541874, "1000recordedmsg", "cool", 1, 2, 3, ";", ";", "#X", "insert", 863.731299996376038, "1000recordedmsg", "nice", 4, 5, 9, ";", ";", "#X", "insert", 822.089599996805191, "1000recordedmsg", "nice", 4, 5, 9, ";", ";", "#X", "insert", 1365.311000004410744, "1000recordedmsg", "nice", 4, 5, 9, ";", ";", "#X", "insert", 921.913800001144409, "1000recordedmsg", "cool", 1, 2, 3, ";", ";", "#X", "insert", 1232.087600000202656, "1000recordedmsg", "nice", 4, 5, 9, ";", ";", "#X", "insert", 1462.296700000762939, 0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", 0.0043, 0.003, -2.6385, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 0.2635, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 6.0, 110.0, 4.95, 45.219099999999997, 0.0, ";", ";", "#X", "insert", 1864.269199997186661, "1000recordedmsg", "date", "2020-11-06", "23:26:37", 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", 0.0012, 0.0042, -3.2026, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 0.34, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 10.0, 111.0, 4.175, 37.805599999999998, 0.0, ";", ";", "#X", "insert", 1661.810999989509583, "1000recordedmsg", "date", "2020-11-07", "15:10:54", 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", 0.006, 0.0061, -2.7669, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 0.4832, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 70.0, 91.0, 3.915, 27.168399999999998, 0.0, ";", ";", "#X", "insert", 1410.875800013542175, "1000recordedmsg", "date", "2020-11-07", "00:08:38", 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", -0.4571, -0.4572, -1.2644, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 2.1231, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 38.0, 39.0, 4.985, 71.120500000000007, 0.0, ";", ";", "#X", "insert", 1258.667400002479553, "1000recordedmsg", "date", "2020-11-07", "00:06:14", 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", -0.173, -0.1713, -2.6364, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 0.5014, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 37.0, 85.0, 3.87, 25.188500000000001, 0.0, ";", ";", "#X", "insert", 1511.954399988055229, "1000recordedmsg", "date", "2020-11-07", "14:01:19", 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", -0.0289, -0.0311, -0.7848, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 0.9859, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 8.0, 30.0, 3.5, 57.269399999999997, 0.0, ";", ";", "#X", "insert", 1434.376000016927719, "1000recordedmsg", "date", "2020-11-07", "14:45:25", 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", -0.0049, -0.0033, -2.9963, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 0.4359, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 26.0, 95.0, 3.555, 26.563199999999998, 0.0, ";", ";", "#X", "insert", 1118.226700007915497, "1000recordedmsg", "date", "2020-11-06", "23:26:24", 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", 0.0757, 0.0728, -4.4899, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 0.3029, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 32.0, 140.0, 4.525, 27.0276, 0.0, ";", ";", "#X", "insert", 2024.399699985980988, "1000recordedmsg", "date", "2020-11-07", "14:37:43", 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", 0.2425, 0.2426, -0.8611, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 3.0835, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 26.0, 27.0, 2.105, 49.425800000000002, 0.0, ";", ";", "#X", "insert", 1249.99779999256134, "1000recordedmsg", "date", "2020-11-07", "00:11:58", 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "offset", 0.0171, 0.0164, -2.4415, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "scale", 0.5183, 0.0, ";", ";", "#X", "insert", 0.0, "1000recordedmsg", "params", 36.0, 79.0, 2.785, 36.771799999999999, 0.0, ";", ";", "#X", "insert", 3155.485200002789497, "1000recordedmsg", "date", "2020-11-07", "14:47:17", 0.0, ";", ";" ],
					"text" : "qlist"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"source" : [ "obj-114", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-120", 0 ],
					"source" : [ "obj-118", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-120", 1 ],
					"source" : [ "obj-119", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-130", 0 ],
					"source" : [ "obj-120", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-120", 2 ],
					"source" : [ "obj-121", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-118", 1 ],
					"source" : [ "obj-125", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-118", 0 ],
					"source" : [ "obj-125", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-119", 0 ],
					"source" : [ "obj-125", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-119", 1 ],
					"source" : [ "obj-125", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-114", 0 ],
					"source" : [ "obj-130", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-114", 0 ],
					"source" : [ "obj-132", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-114", 0 ],
					"midpoints" : [ 687.5, 480.0, 756.5, 480.0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-16", 0 ],
					"source" : [ "obj-15", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-114", 0 ],
					"midpoints" : [ 700.0, 480.0, 756.5, 480.0 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 0 ],
					"midpoints" : [ 830.5, 555.0, 663.0, 555.0, 663.0, 369.0, 687.5, 369.0 ],
					"source" : [ "obj-27", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-125", 0 ],
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-114", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-52", 0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-4", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-125", 0 ],
					"source" : [ "obj-5", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"source" : [ "obj-51", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"source" : [ "obj-54", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-132", 0 ],
					"source" : [ "obj-57", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-118", 0 ],
					"midpoints" : [ 687.5, 339.0, 756.5, 339.0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-119", 0 ],
					"source" : [ "obj-9", 1 ]
				}

			}
 ],
		"styles" : [ 			{
				"name" : "max6box",
				"default" : 				{
					"accentcolor" : [ 0.8, 0.839216, 0.709804, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.5 ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "max6inlet",
				"default" : 				{
					"color" : [ 0.423529, 0.372549, 0.27451, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "max6message",
				"default" : 				{
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgfillcolor" : 					{
						"type" : "gradient",
						"color1" : [ 0.866667, 0.866667, 0.866667, 1.0 ],
						"color2" : [ 0.788235, 0.788235, 0.788235, 1.0 ],
						"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0
					}

				}
,
				"parentstyle" : "max6box",
				"multi" : 0
			}
, 			{
				"name" : "max6outlet",
				"default" : 				{
					"color" : [ 0.0, 0.454902, 0.498039, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
 ]
	}

}
