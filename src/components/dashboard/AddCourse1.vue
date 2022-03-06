<template>
    	<div id="step-1" role="tabpanel" class="content fade" aria-labelledby="steppertrigger1">
								<!-- Title -->
								<h4>Course details</h4>

								<hr> <!-- Divider -->

								<!-- Basic information START -->
								<div class="row g-4">
									<!-- Course title -->
									<div class="col-12">
										<label class="form-label">Course title</label>
										<input class="form-control" type="text" placeholder="Enter course title">
									</div>

									<!-- Short description -->
									<div class="col-12">
										<label class="form-label">Short description</label>
										<textarea class="form-control" rows="2" placeholder="Enter keywords"></textarea>
									</div>

									<!-- Course category -->
									<div class="col-md-6">
										<label class="form-label">Course category</label>
										<select class="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm" data-search-enabled="true">
											<option value="">Select category</option>
											<option>Engineer</option>
											<option>Medical</option>
											<option>Information technology</option>
											<option>Finance</option>
											<option>Marketing</option>
										</select>
									</div>

									<!-- Course level -->
									<div class="col-md-6">
										<label class="form-label">Course level</label>
										<select class="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm" data-search-enabled="false" data-remove-item-button="true">
											<option value="">Select course level</option>
											<option>All level</option>
											<option>Beginner</option>
											<option>Intermediate</option>
											<option>Advance</option>
										</select>
									</div>

									<!-- Language -->
									<div class="col-md-6">
										<label class="form-label">Language</label>
										<select class="form-select js-choice border-0 z-index-9 bg-transparent" multiple="multiple" aria-label=".form-select-sm" data-max-item-count="3" data-remove-item-button="true">
											<option value="">Select language</option>
											<option>English</option>
											<option>German</option>
											<option>French</option>
											<option>Hindi</option>
										</select>
									</div>

									<!-- Switch -->
									<div class="col-md-6 d-flex align-items-center justify-content-start mt-5">
										<div class="form-check form-switch form-check-md">
											<input class="form-check-input" type="checkbox" id="checkPrivacy1">
											<label class="form-check-label" for="checkPrivacy1">Check this for featured course</label>
										</div>
									</div>

									<!-- Course time -->
									<div class="col-md-6">
										<label class="form-label">Course time</label>
										<input class="form-control" type="text" placeholder="Enter course time">
									</div>

									<!-- Total lecture -->
									<div class="col-md-6">
										<label class="form-label">Total lecture</label>
										<input class="form-control" type="text" placeholder="Enter total lecture">
									</div>

									<!-- Course price -->
									<div class="col-md-6">
										<label class="form-label">Course price</label>
										<input type="text" class="form-control" placeholder="Enter course price">
									</div>

									<!-- Course discount -->
									<div class="col-md-6">
										<label class="form-label">Discount price</label>
										<input class="form-control" type="text" placeholder="Enter discount">
										<div class="col-12 mt-1 mb-0">
											<div class="form-check small mb-0">
												<input class="form-check-input" type="checkbox" id="checkBox1">
												<label class="form-check-label" for="checkBox1">
													Enable this Discount
												</label>
											</div>
										</div>
									</div>
									
									<!-- Course description -->
									<div class="col-12">
										<label class="form-label">Add description</label>
										<!-- Editor toolbar -->
										<div class="bg-light border border-bottom-0 rounded-top py-3" id="quilltoolbar">
											<span class="ql-formats">
												<select class="ql-size"></select>
											</span>
											<span class="ql-formats">
												<button class="ql-bold"></button>
												<button class="ql-italic"></button>
												<button class="ql-underline"></button>
												<button class="ql-strike"></button>
											</span>
											<span class="ql-formats">
												<select class="ql-color"></select>
												<select class="ql-background"></select>
											</span>
											<span class="ql-formats">
												<button class="ql-code-block"></button>
											</span>
											<span class="ql-formats">
												<button class="ql-list" value="ordered"></button>
												<button class="ql-list" value="bullet"></button>
												<button class="ql-indent" value="-1"></button>
												<button class="ql-indent" value="+1"></button>
											</span>
											<span class="ql-formats">
												<button class="ql-link"></button>
												<button class="ql-image"></button>
											</span>
											<span class="ql-formats">
												<button class="ql-clean"></button>
											</span>
										</div>

										<!-- Main toolbar -->
										<div class="bg-body border rounded-bottom h-400px overflow-hidden" id="quilleditor">
											<br>
											<h1>Quill Rich Text Editor</h1>
											<br>
											<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
											<br>
											<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
											<br>
											<p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
											<br>
											<p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>

											<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
											<br>
											<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
											<br>
											<p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
											<br>
											<p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>

											<p>Quill is a free, open-source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</p>
											<br>
											<p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for a few longer Mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes. </p>
											<br>
											<p> Affronting imprudence do he he everything. Test lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. </p>
											<br>
											<p> Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. </p>
										</div>
									</div>	

									<!-- Step 1 button -->
									<div class="d-flex justify-content-end mt-3">
										<button class="btn btn-primary next-btn mb-0">Next</button>
									</div>
								</div>
								<!-- Basic information START -->
							</div>
</template>
<script>
export default {
    name:'Addcourse1'
}
</script>
