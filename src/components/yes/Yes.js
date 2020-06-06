import React from 'react';
import { Formik as FormikWrapper, Field, Form } from 'formik';

const initialValues = {
	mask: false,
	safeDrive: false,
	driverHumor: false,
	fragrant: false
};
function Yes(props) {
	const onSubmit = (value) => {
		console.log(value);
		props.history.replace('/final');
	};

	return (
		<div className="route">
			<p className="p-0 m-0 route__text">
				<b>کدام موارد مورد پسند شما قرار گرفت ؟</b>
			</p>
			<FormikWrapper initialValues={initialValues} onSubmit={onSubmit}>
				<Form>
					<div className="d-flex justify-content-center flex-column align-items-end route--text  pb-2">
						<div dir="rtl" className="form-check mt-4 text-right">
							<Field type="checkbox" name="mask" id="mask" className="form-check-input" />
							<label
								className="form-check-label mr-4 checkbox-text"
								htmlFor="mask"
								name="mask"
								for="mask"
							>
								استفاده راننده از ماسک
							</label>
						</div>
						<div dir="rtl" className="form-check text-right mt-2">
							<Field type="checkbox" name="safeDrive" id="safeDrive" className="form-check-input ml-5" />
							<label
								className="form-check-label mr-4 checkbox-text"
								htmlFor="safeDrive"
								name="safeDrive"
								for="safeDrive"
							>
								رعایت نکات ایمنی
							</label>
						</div>
						<div dir="rtl" className="form-check text-right mt-2">
							<Field type="checkbox" name="fragrant" id="fragrant" className="form-check-input ml-5" />
							<label
								className="form-check-label mr-4 checkbox-text"
								htmlFor="fragrant"
								name="fragrant"
								for="fragrant"
							>
								خوشبو بودن ماشین
							</label>
						</div>
						<div dir="rtl" className="form-check text-right mt-2">
							<Field
								type="checkbox"
								name="driverHumor"
								id="driverHumor"
								className="form-check-input ml-5"
							/>
							<label
								className="form-check-label mr-4 checkbox-text"
								htmlFor="driverHumor"
								name="driverHumor"
								for="driverHumor"
							>
								ادب و احترام راننده
							</label>
						</div>
					</div>

					<button type="submit" className="btn button btn-success mr-2 mt-3">
						ثبت بازخورد
					</button>

					<button type="reset" className="btn button btn-secondary mt-3">
						پاک کردن همه
					</button>
				</Form>
			</FormikWrapper>
		</div>
	);
}

export default Yes;
